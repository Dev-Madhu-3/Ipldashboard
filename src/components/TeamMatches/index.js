import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
    id: '',
  }

  componentDidMount() {
    this.renderAllComponents()
  }

  renderAllComponents = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const recentMatches = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading: false,
      id,
    })
  }

  render() {
    const {
      id,
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    return (
      <div className={`main-container ${id}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="banner-con">
            <img className="Banner" src={teamBannerUrl} alt="team banner" />
            <div className="recent-matches-con">
              <p className="latest-match-text">Latest Matches</p>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
              <div className="cards-con">
                {recentMatches.map(each => (
                  <MatchCard recentMatches={each} key={each.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
