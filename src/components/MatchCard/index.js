import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {recentMatches} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      result,
      matchStatus,
    } = recentMatches
    const cls = matchStatus === 'Won' ? 'win' : 'lose'
    return (
      <li className="match-cardcontainer">
        <img
          className="match-card-image"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <h1 className="heading">{competingTeam}</h1>
        <p className="text">{result}</p>
        <p className={cls}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
