const ParkCard = (props) => {
  return (
    <div className="park-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  )
}

export default ParkCard
