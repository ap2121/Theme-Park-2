import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../../components/Ride/RideCard'
import { useParams, useNavigate } from 'react-router-dom'
import './ParkDetails.css'

const ParkDetails = () => {
  const [currentPark, setCurrentPark] = useState('')
  const [rides, setCurrentRides] = useState([])
  let { id } = useParams()
  const getPark = async () => {
    const response = await axios.get(`/api/parks/${id}`)
    setCurrentPark(response.data)
  }

  const getRides = async () => {
    const response = await axios.get(`/api/rides/parks/${id}`)
    setCurrentRides(response.data)
  }
  const navigate = useNavigate()
  const deletePark = async () => {
    const deleted = await axios.delete(`/api/parks/${id}`)
    if (deleted) {
      alert('Park has been re-closed')
      navigate('/parks-list')
    }
  }

  useEffect(() => {
    getPark()
  }, [id])

  useEffect(() => {
    getRides()
  }, [id])

  const getTheseRides = rides.map((ride) => (
    <RideCard
      key={ride._id}
      name={ride.name}
      description={ride.description}
      image={ride.image}
      id={ride._id}
    />
  ))

  return (
    <div
      className="park-deets-bg"
      style={{ backgroundImage: `url(${currentPark.image})` }}
    >
      <div className="park-deets-parent">
        <div className="park-rides">{getTheseRides}</div>
        <div className="park-deets-cntr">
          <img src={currentPark.image} alt={currentPark.name} />
          <h2 className="current-park-name">{currentPark.name}</h2>
          <p className="card-location">{currentPark.location}</p>
          <p>
            {currentPark.dateOpened} - <span>{currentPark.dateClosed}</span>
          </p>
          <p>{currentPark.description}</p>
          <br></br>
          <button onClick={deletePark} className="dlt-btn">
            Delete Park
          </button>
        </div>
      </div>
    </div>
  )
}

export default ParkDetails
