import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ParkCard from '../../components/ParkCard/ParkCard'
import { useParams } from 'react-router-dom'



const ParkDetails = () => {
  const [currentPark, setCurrentPark] = useState(null)
  let {id} = useParams()
  const getPark = async () => {
    const response = await axios.get(`/api/parks/${id}`)
    setCurrentPark(response.data)
  }

  useEffect(() => {
    getPark()
  }, [id])
    return (
    <div>
        <h2>{currentPark.name}</h2>
        </div>
  )
}

export default ParkDetails