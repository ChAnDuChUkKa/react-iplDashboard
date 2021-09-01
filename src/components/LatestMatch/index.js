// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
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
  } = matchDetails
  return (
    <div className="latest-match-container">
      <div className="half-container">
        <p className="heading">{competingTeam}</p>
        <p className="para">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <div className="image-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="second-half-container">
        <p className="para">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <p className="para">Man Of The Match</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
