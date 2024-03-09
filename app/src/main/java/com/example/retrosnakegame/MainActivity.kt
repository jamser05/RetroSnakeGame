package com.example.retrosnakegame

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowLeft
import androidx.compose.material.icons.filled.KeyboardArrowRight
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults.buttonColors
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.paint
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.unit.times
import androidx.lifecycle.lifecycleScope
import com.example.retrosnakegame.ui.theme.RetroSnakeGameTheme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.MutableStateFlow

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            RetroSnakeGameTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val game = remember { Game(lifecycleScope) }

                    GameContent(game = game)
                }
            }
        }

    }
}

@Composable
fun GameContent(game: Game) {
    val gameStatus = game.gameStatus.collectAsState().value

    when (gameStatus) {
        GameStatus.START_GAME -> {
            StartGame {
                game.start()
            }
        }
        GameStatus.GAME_IN_PROGRESS -> {
            Snake(game)
        }
    }
}


@Composable
fun Buttons(onDirectionChange: (Pair<Int, Int>) -> Unit ) {
    val buttonSize = Modifier.size(64.dp)

    Column(horizontalAlignment = Alignment.CenterHorizontally, modifier = Modifier.padding(24.dp)) {
        // Coordinates Vertical: var sr = arrayOf(-1, 1, 0, 0)
        // Coordinates Horizontal: var sc = arrayOf(0, 0, 1, -1)

        Button(
            onClick = { onDirectionChange(Pair(0, -1)) },
            modifier = buttonSize,
            colors = buttonColors(Color.Red)
        ) {
            Icon(Icons.Default.KeyboardArrowUp, null)
        }

        Row {
            Button(
                onClick = { onDirectionChange(Pair(-1, 0)) },
                modifier = buttonSize,
                colors = buttonColors(Color.Red)
            )
            {
                Icon(Icons.Default.KeyboardArrowLeft, null)
            }
            Spacer(modifier = buttonSize)

            Button(
                onClick = { onDirectionChange(Pair(1, 0)) },
                modifier = buttonSize,
                colors = buttonColors(Color.Red)
            ) {
                Icon(Icons.Default.KeyboardArrowRight, null)
            }
        }

        Button(
            onClick = { onDirectionChange(Pair(0, 1)) },
            modifier = buttonSize,
            colors = buttonColors(Color.Red)
        ) {
            Icon(Icons.Default.KeyboardArrowDown, null)
        }
    }
}

@Composable
fun Board(state: State,) {
    BoxWithConstraints(
        Modifier
            .padding(16.dp)
            .background(Color.Black)
    ) {
        // Game.BOARD_SIZE = 16dp

        val tileSize = maxWidth / Game.BOARD_SIZE
        val numRows = Game.BOARD_SIZE
        // tileSize = 400 / 16 = 25dp per tile

        // Board
        Box(
            Modifier
                .size(maxWidth)
        ) {
            for (rowIndex in 0 until numRows) {
                for (colIndex in 0 until numRows) {
                    val color = if ((rowIndex + colIndex) % 2 == 0 ) {
                        Color(0xFFAEEC5A)
                    } else {
                        Color(0xFF94C651)
                    }

                    Box(
                        modifier = Modifier
                            .offset(x = colIndex * tileSize, y = rowIndex * tileSize)
                            .size(tileSize)
                            .background(color)
                    )
                }
            }
        }

        // Apple
        Box(
            modifier = Modifier
                .offset(x = tileSize * state.food.first, y = tileSize * state.food.second)
                .size(tileSize)
                .paint(painter = painterResource(id = R.drawable.apple), contentScale = ContentScale.FillBounds)
        )
            // Snake
        state.snake.forEach {
            Box(
                modifier = Modifier
                    .offset(x = tileSize * it.first, y = tileSize * it.second)
                    .size(tileSize)
                    .background(Color.Green)
                    .border(1.dp, Color.Black)
            )
        }
    }
}

@Composable
fun Score() {
    val userScoreState = remember { mutableIntStateOf(UserSession.userScore) }

    LaunchedEffect(Unit) {
        val userScoreFlow = UserSession.userScoreFlow
        userScoreFlow.collect { userScore ->
            userScoreState.intValue = userScore
        }
    }

    Row(
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically

    ) {
        Image (
            painter = painterResource(
                R.drawable.apple),
            contentDescription = "apple_score",
            Modifier
                .height(80.dp)
                .width(80.dp)
        )
        Text("${userScoreState.intValue}", color = Color.White, fontSize = 32.sp, fontWeight = FontWeight.Bold)
    }
}

@Composable
fun Snake(game: Game) {
    val state = game.state.collectAsState(initial = null)

    Column(
        modifier = Modifier.fillMaxSize().background(color = Color(0xFF6C9B2E)),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        // Add any other modifiers you need
    ) {

        Score()
        state.value?.let {
            Board(it)
        }
        Buttons {
            game.move = it
            game.mutableFirstInputReceived = MutableStateFlow(true)
        }
    }


}

@Composable
fun StartGame(onStartGameClicked: () -> Unit) {
    Box(modifier = Modifier.fillMaxSize()) {
        Image(
            painter = painterResource(id = R.drawable.start_game_background),
            contentDescription = "Background",
            contentScale = ContentScale.FillBounds,
            modifier = Modifier
                .fillMaxSize()
                .background(color = Color(0xFF87CEEB))
        )

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(bottom = 100.dp)
            ,
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally

        ) {
            Row(
                horizontalArrangement = Arrangement.SpaceBetween
            )
            {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    Image (
                        painter = painterResource(
                            R.drawable.apple),
                        contentDescription = "apple_score",
                        Modifier
                            .height(80.dp)
                            .width(80.dp)
                    )

                    Text(
                        text = "${UserSession.userScore}",
                        fontSize = 35.sp,
                        color = Color.White
                    )
                }

                Spacer(
                    Modifier.width(16.dp)
                )

                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                ){
                    Image (
                        painter = painterResource(
                            R.drawable.trophy),
                        contentDescription = "apple_score",
                        Modifier
                            .height(80.dp)
                            .width(80.dp)
                    )
                    Text(
                        text = "${UserSession.maxUserScore}",
                        fontSize = 35.sp,
                        color = Color.White
                    )
                }
            }

            Button(
                onClick = onStartGameClicked,
                colors = buttonColors(Color.Red),
                modifier = Modifier
                    .padding(vertical = 32.dp)
                    .height(60.dp)
                    .width(180.dp)
            ) {
                Text("Play", fontSize = 24.sp )
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun StartGamePreview() {
    RetroSnakeGameTheme {
        Column {
            StartGame {}
        }
    }
}

@OptIn(ExperimentalCoroutinesApi::class)
@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    val dummyGame = createDummyGame() // Create a dummy Game object
    RetroSnakeGameTheme {
        Snake(dummyGame)
    }
}

@ExperimentalCoroutinesApi // Add this annotation if necessary
fun createDummyGame(): Game {
    val dummyScope = CoroutineScope(Dispatchers.Default) // Create a dummy CoroutineScope
    return Game(dummyScope)
}


