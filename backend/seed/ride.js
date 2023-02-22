const db = require('../db')
const Ride = require('../models/ride')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const rides = [
        {name: 'Scary Tunnel', description: 'Super scary boo' }
    ]

    await Ride.insertMany(rides)
}

const run = async () => {
    await main()
    db.close()
}

run()