import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerImage: '',
    latestMatches: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchCardData()
  }

  getMatchCardData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    if (response.ok === true) {
      const teamBannerUrl = data.team_banner_url

      const latestMatchDetails = data.latest_match_details

      const recentMatches = data.recent_matches

      const updatedLatestMatches = {
        competingTeam: latestMatchDetails.competing_team,
        competingTeamLogo: latestMatchDetails.competing_team_logo,
        date: latestMatchDetails.date,
        firstInnings: latestMatchDetails.first_innings,
        id: latestMatchDetails.id,
        manOfTheMatch: latestMatchDetails.man_of_the_match,
        matchStatus: latestMatchDetails.match_status,
        result: latestMatchDetails.result,
        secondInnings: latestMatchDetails.second_innings,
        umpires: latestMatchDetails.umpires,
        venue: latestMatchDetails.venue,
      }

      const updatedRecentMatches = recentMatches.map(eachItem => ({
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
        bannerImage: teamBannerUrl,
        latestMatches: updatedLatestMatches,
        recentMatches: updatedRecentMatches,
        isLoading: false,
      })
    }
  }

  renderBlogItemDetails = () => {
    const {bannerImage, latestMatches, recentMatches} = this.state

    return (
      <div className="container">
        <div>
          <img src={bannerImage} alt="team banner" className="banner-image" />
        </div>
        <div>
          <LatestMatch latestMatches={latestMatches} />
        </div>
        <ul className="card-container">
          {recentMatches.map(eachItem => (
            <MatchCard cardDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>{this.renderBlogItemDetails()}</div>
        )}
      </div>
    )
  }
}
export default TeamMatches
