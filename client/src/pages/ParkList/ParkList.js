
import axios from 'axios'
import { useState, useEffect, React } from 'react'
import './ParkList.css'
import ParkCard from '../../components/ParkCard/ParkCard'



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
      dateOpened={park.dateOpened}
      dateClosed={park.dateClosed}
      description={park.description}
      id={park._id}
    />
  ))

  return (
  <div className='park-list-bckrnd'>
  <div className='park-list-cnt'>
    <div className='park-cards'>
    {fullList}
    </div>
    </div>
    </div>
  )
}

export default ParkList
