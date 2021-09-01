// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {matchDetails} = props
  const {id, teamImageUrl, name} = matchDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-class">
      <li className="match-card">
        <img src={teamImageUrl} alt={name} className="image" />
        <p className="heading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
