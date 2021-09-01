// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatchDetails: [],
    bannerUrl: '',
    recentMatches: [],
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const bannerImageUrl = data.team_banner_url
    const latestMatches = data.latest_match_details
    const outputMatches = {
      competingTeam: latestMatches.competing_team,
      competingTeamLogo: latestMatches.competing_team_logo,
      date: latestMatches.date,
      firstInnings: latestMatches.first_innings,
      id: latestMatches.id,
      manOfTheMatch: latestMatches.man_of_the_match,
      matchStatus: latestMatches.match_status,
      result: latestMatches.result,
      secondInnings: latestMatches.second_innings,
      umpires: latestMatches.umpires,
      venue: latestMatches.venue,
    }
    console.log(data.recent_matches)
    const recentMatchesData = data.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))
    console.log(recentMatchesData)

    this.setState({
      latestMatchDetails: outputMatches,
      bannerUrl: bannerImageUrl,
      isLoading: false,
      recentMatches: recentMatchesData,
    })
  }

  getLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderMatchCard = () => {
    const {recentMatches} = this.state
    return (
      <ul className="matches-list-of-cards-container">
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} listMatchDetails={eachMatch} />
        ))}
      </ul>
    )
  }

  getTeamDetails = () => {
    const {latestMatchDetails, bannerUrl} = this.state

    return (
      <div className="matches-app-container">
        <img src={bannerUrl} alt="team banner" className="banner-logo" />
        <h1 className="heading">Latest Matches</h1>
        <LatestMatch matchDetails={latestMatchDetails} />
        {this.renderMatchCard()}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="matches-container">
        {isLoading ? this.getLoader() : this.getTeamDetails()}
      </div>
    )
  }
}
export default TeamMatches
