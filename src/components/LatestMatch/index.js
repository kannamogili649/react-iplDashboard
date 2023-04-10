import './index.css'

const LatestMatch = props => {
  const {latestMatches} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatches

  return (
    <div className="details-container">
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="logo"
        />
      </div>
      <div>
        <p>{firstInnings}</p>
        <p>{competingTeam}</p>
        <p>{secondInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{result}</p>
        <p>{umpires}</p>
        <p> {matchStatus} </p>
        <p>{id}</p>
      </div>
    </div>
  )
}
export default LatestMatch
