import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.teams.map(eachData => ({
        name: eachData.name,
        id: eachData.id,
        teamImageUrl: eachData.team_image_url,
      }))
      this.setState({teamsData: updatedData, isLoading: false})
    }
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="container">
        <div className="title-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="team-card-container">
            {teamsData.map(eachTeam => (
              <TeamCard cardDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
