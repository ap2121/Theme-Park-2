import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './AddPark.css'
const AddPark = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    description: "",
    dateClosed: ""
  })
  
const navigate = useNavigate()
const handleChange = (e) => {
    setFormData((prevFormData) => {
        return {
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/parks', {...formData})
    navigate('/parks-list')
} 
    return (
    <div>
        <h2 className='form-title'>Add a new abandoned park!</h2>
        <form className = 'form-container' onSubmit={handleSubmit}>
        <input type="text" placeholder='Park Name' name='name' onChange={handleChange} value={formData.name} />
        <input type="text" placeholder='Image of Park' name='image' onChange={handleChange} value={formData.image}/>
        <input type="text" placeholder='Location of Park' name='location' onChange={handleChange} value={formData.location}/>
        <input type="text" placeholder='Description' name='description' onChange={handleChange} value={formData.description}/>
        <input type="text" placeholder="Year closed" name='dateClosed' onChange={handleChange} value={formData.dateClosed}/>
        <button>Add Park</button>

        </form>
    </div>
  )
}

export default AddPark