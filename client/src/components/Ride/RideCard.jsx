import React from 'react'
import './RideCard.css'
const RideCard = (props) => {
  return (
    <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <img src={props.image} alt={props.name}/>
        
        
    </div>
  )
}

export default RideCard