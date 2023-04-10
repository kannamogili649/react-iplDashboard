import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = cardDetails
  return (
    <li className="card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="heading"> {competingTeam} </p>
      <p> {matchStatus} </p>
      <p> {result} </p>
    </li>
  )
}
export default MatchCard
