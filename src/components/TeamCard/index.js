import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamList} = this.props
    const {id, name, teamImageUrl} = teamList
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team-card-con">
          <img className="team-card-img" src={teamImageUrl} alt={name} />
          <p className="team-card-text">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
