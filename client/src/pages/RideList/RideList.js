import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RideCard from '../../components/Ride/RideCard'


const RideList = () => {
 const [rides, setRides] = useState([])
 
 const getRides = async () => {
    const response = await axios.get(`http://localhost:3001/api/rides`)
    setRides(response.data)
 } 

 useEffect(()=>{
  getRides()
 }, [])
    
const getTheRides = rides.map((ride)=>(
  <RideCard
  key={ride._id}
  image={ride.image}
  description={ride.description}
  name={ride.name}
  
  />
))


 return (
    <div>
      {getTheRides}
    </div>
  )
}

export default RideList