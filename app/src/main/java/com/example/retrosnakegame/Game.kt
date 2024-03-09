package com.example.retrosnakegame


import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock

class Game(private val scope: CoroutineScope) {
    val gameStatus = MutableStateFlow(GameStatus.START_GAME)

    var mutableFirstInputReceived = MutableStateFlow(false)
    private val mutex: Mutex = Mutex()
    private val mutableState = MutableStateFlow(State(food = Pair(5, 5), snake = listOf(Pair(7, 7))))

    val state: Flow<State> = mutableState

    var move = Pair(1, 0)
        set(value: Pair<Int, Int>) {
            scope.launch {
                mutex.withLock {
                    if(field.first + value.first != 0 || field.second + value.second != 0) {
                        field = value
                    }
                }
            }
        }

    init {
        scope.launch {
            var snakeLength = 4

            while (true) {
                val newMove = if (mutableFirstInputReceived.value) {
                    move
                } else {
                    Pair(0, 0)
                }

                delay(140)

                mutableState.update {
                        currentState ->
                    val newPosition = currentState.snake.first().let { position ->
                        mutex.withLock {
                            Pair(
                                /// If I want the game to continue after hitting
                                // the wall I can mod both the x and y
                                (position.first + newMove.first),
                                (position.second + newMove.second)
                            )
                        }
                    }


                    if(!mutableFirstInputReceived.value) {
                        return@update currentState
                    }

                    if (snakeOutOfBounds(newPosition) || snakeTouchedHimself(newPosition)) {
                        gameOver()
                        return@update currentState
                    }

                    if (newPosition == currentState.food) {
                        UserSession.userScore++
                        snakeLength++
                    }

                    if (currentState.snake.contains(newPosition)) {
                        snakeLength = 4
                    }

                    currentState.copy(
                        food = if (newPosition == currentState.food)
                            Pair(
                                (0 until BOARD_SIZE).random(),
                                (0 until BOARD_SIZE).random()
                            ) else currentState.food,
                        snake = listOf (newPosition) + currentState.snake.take(snakeLength - 1)
                    )
                }
            }
        }
    }

    private fun snakeTouchedHimself(position: Pair<Int, Int>): Boolean {
        val snake = mutableState.value.snake

        return position in snake.drop(1)
    }

    private fun snakeOutOfBounds(position: Pair<Int, Int>): Boolean {
        return if (
            position.first < 0 || position.first >= BOARD_SIZE ||
            position.second < 0 || position.second >= BOARD_SIZE
        ) {
            true
        } else {
            false
        }
    }

    fun start() {
        scope.launch {
            gameStatus.value = GameStatus.GAME_IN_PROGRESS
        }

        gameStatus.value = GameStatus.GAME_IN_PROGRESS
        UserSession.userScore = 0

        mutableFirstInputReceived = MutableStateFlow(false)
        mutableState.value =
            State(
                food = Pair(
                    (0 until BOARD_SIZE).random(),
                    (0 until BOARD_SIZE).random()
                ),
                snake = listOf(Pair(
                    (0 until BOARD_SIZE).random(),
                    (0 until BOARD_SIZE).random())
                )
            )
    }

    private fun gameOver() {
        gameStatus.value = GameStatus.START_GAME
    }

    companion object {
        const val BOARD_SIZE = 16
    }
}