import { Link } from "react-router-dom"
import './ParkCard.css'
const ParkCard = (props) => {
  return (
    <div className="park-card">
    <Link to={`/parks/details/${props.id}`} className='link' >
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </Link>
    </div>

  )
}

export default ParkCard