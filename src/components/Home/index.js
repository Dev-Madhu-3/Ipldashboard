import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.renderList()
  }

  renderList = async () => {
    const responce = await fetch('https://apis.ccbp.in/ipl')
    const data = await responce.json()
    const {teams} = data
    const updatedData = teams.map(eachOne => ({
      name: eachOne.name,
      id: eachOne.id,
      teamImageUrl: eachOne.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home-con">
            <div className="home-head-con">
              <img
                className="home-head-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div className="home-team-cards-con">
              {teamList.map(eachList => (
                <TeamCard teamList={eachList} key={eachList.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
