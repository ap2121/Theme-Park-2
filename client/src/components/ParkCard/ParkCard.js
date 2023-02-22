import { Link } from "react-router-dom"
const ParkCard = (props) => {
  return (
    <Link to={`/parks/details/${props.id}`} >
    <div className="park-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
    </Link>
  )
}

export default ParkCard
