import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow

object UserSession {
    private val _userScore = MutableStateFlow(0)
    val userScoreFlow = _userScore.asStateFlow()

    private var _maxUserScore = 0

    val maxUserScore: Int
        get() = _maxUserScore

    var userScore: Int
        get() = _userScore.value
        set(value) {
            _userScore.value = value
            _maxUserScore = maxOf(value, _maxUserScore)
        }
}
