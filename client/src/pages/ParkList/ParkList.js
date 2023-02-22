
import axios from 'axios'
import { useState, useEffect, React } from 'react'

import ParkCard from '../../components/ParkCard/ParkCard'
import React from 'react'


const ParkList = () => {
  const [parks, setParks] = useState([])

  const getParks = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/parks')
      setParks(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getParks()
  }, [])

  const fullList = parks.map((park) => (
    <ParkCard
      key={park._id}
      image={park.image}
      name={park.name}
      location={park.location}
      dateClosed={park.dateClosed}
      description={park.description}
    />
  ))

  return <div>{fullList}</div>
}

export default ParkList
