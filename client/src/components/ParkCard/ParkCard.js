import axios from 'axios'
import { useState, useEffect } from 'react'

const ParkCard = () => {
  const [parks, setParks] = useState([])

  const getParks = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/parks')
      setParks(res.data)
    } catch (error) {}
  }

  useEffect(() => {
    getParks()
  }, [])

  return (
    <div>
      <div>
        {parks.map((park) => (
          <div key={park._id}>
            <img src={park.image} alt={park.name} />
            <h1>{park.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ParkCard
