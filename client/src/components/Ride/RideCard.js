import React from 'react'

const RideCard = (props) => {
  return (
    <div>
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name}/>
        <p>{props.description}</p>
    </div>
  )
}

export default RideCard