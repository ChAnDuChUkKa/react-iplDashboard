// Write your code here
import './index.css'

const MatchCard = props => {
  const {listMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = listMatchDetails

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="image1"
      />
      <p className="heading">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className="para">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
