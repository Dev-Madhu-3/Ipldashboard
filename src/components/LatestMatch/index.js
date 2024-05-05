import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails
    return (
      <div className="container">
        <div className="for-small">
          <div className="first-con-LatestMatch">
            <h1 className="heading head">{competingTeam}</h1>
            <p className="heading">{date}</p>
            <p className="para-text">{venue}</p>
            <p className="para-text">{result}</p>
          </div>
          <img
            className="image"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="second-con-LatestMatch">
          <h1 className="heading">First Innings</h1>
          <p className="para-text">{firstInnings}</p>
          <h1 className="heading">Second Innings</h1>
          <p className="para-text">{secondInnings}</p>
          <h1 className="heading">Man of the Match</h1>
          <p className="para-text">{manOfTheMatch}</p>
          <h1 className="heading">Umpires</h1>
          <p className="para-text">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
