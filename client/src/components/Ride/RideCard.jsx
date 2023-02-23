import React from 'react'
import './RideCard.css'
const RideCard = (props) => {
  return (
    <div className="ride-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default RideCard
