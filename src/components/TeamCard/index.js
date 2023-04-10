import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-item">
        <div>
          <img className="card-image" src={teamImageUrl} alt={name} />
        </div>
        <p className="title">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
