import './index.css'

const Header = props => {
  const {score, seconds} = props
  return (
    <nav className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-container">
        <li>
          <p className="score">
            Score: <span className="counting">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="counting">{seconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
