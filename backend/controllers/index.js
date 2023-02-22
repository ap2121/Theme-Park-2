const Park = require('../models/park')
const Ride = require('../models/ride')

const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find()
    res.status(200).json(parks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getParkById = async (req, res) => {
  try {
    const { id } = req.params
    const park = await Park.findById(id)
    if (park) {
      res.status(200).json(park)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find()
    return res.status(200).json(rides)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getRideById = async (req, res) => {
  try {
    const { id } = req.params
    const ride = await Ride.findById(id)
    res.status(200).json(ride)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deletePark = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Park.findByIdAndDelete(id)
    if (deleted) {
      res.status(200).send('Park Closed')
    }
    throw new Error('Huh?  There is no such park...')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteRide = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Ride.findByIdAndDelete(id)
    if (deleted) {
      res.status(200).send('Ride Out of Order')
    }
    throw new Error('Huh?  There is no such ride...')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createPark = async (req, res) => {
  try {
    const park = await new Park(req.body)
    await park.save()
    res.status(200).json(park)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createRide = async (req, res) => {
  try {
    const ride = await new Ride(req.body)
    await ride.save()
    res.status(200).json(ride)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getRideByParkId = async (req, res) => {
  try {
    const { id } = req.params
    const rides = await Ride.find({ parkId: id })
    res.status(200).json(rides)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllParks,
  getAllRides,
  getParkById,
  getRideById,
  deletePark,
  deleteRide,
  createPark,
  createRide,
  getRideByParkId
}
