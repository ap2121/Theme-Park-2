import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
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
    axios.post('api/parks', {...formData})
    navigate('parks-list')
} 
    return (
    <div>AddPark</div>
  )
}

export default AddPark