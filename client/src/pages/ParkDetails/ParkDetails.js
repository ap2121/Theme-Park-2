import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../../components/Ride/RideCard'
import { useParams } from 'react-router-dom'



const ParkDetails = () => {
  const [currentPark, setCurrentPark] = useState('')
  const [rides, setCurrentRides] = useState([]) 
  let {id} = useParams()
  const getPark = async () => {
    const response = await axios.get(`http://localhost:3001/api/parks/${id}`)
    setCurrentPark(response.data)
  }

  const getRides = async() => {
    const response = await axios.get(`http://localhost:3001/api/rides/parks/${id}`)
    setCurrentRides(response.data)
  }


  useEffect(() => {
    getPark()
  }, [id])

  useEffect(() =>{
    getRides()
  }, [id])
  
  
  const getTheseRides = rides.map((ride)=>(
    <RideCard
    key={ride._id}
    name={ride.name}
    description={ride.description}
    image={ride.image}
    id={ride._id}
    />
  ))
  
  return (
    <div>
        <h2>{currentPark.name}</h2>
        <img src={currentPark.image} alt={currentPark.name}/>
        <p>{currentPark.location}</p>
        <p>{currentPark.dateClosed}</p>
        <p>{currentPark.description}</p>
        <br></br>
        {getTheseRides}
    </div>
  )
}

export default ParkDetails