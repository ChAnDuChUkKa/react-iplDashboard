// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamList: []}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
      name: eachItem.name,
    }))
    this.setState({teamList: formattedData, isLoading: false})
  }

  getLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  getDetailsPage = () => {
    const {teamList} = this.state
    return (
      <ul className="list-container">
        {teamList.map(eachItem => (
          <TeamCard key={eachItem.id} matchDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="logo-and-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? this.getLoader() : this.getDetailsPage()}
      </div>
    )
  }
}
export default Home
