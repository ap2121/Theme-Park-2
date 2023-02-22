const db = require('../db')
const Park = require('../models/park')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const parks = [
        {image: 'https://i.insider.com/5a94606e3aab0529008b475b?width=700&format=jpeg&auto=webp', name:'Joyland Amusement Park', location: 'Kansas', dateClosed: '2006', description: 'Joyland Amusement Park was an amusement park in Wichita, Kansas, United States. It was in continuous operation for 55 years, from June 12, 1949 to 2004, closing permanently in 2006.[1] It was once the largest theme park in central Kansas and featured a wooden roller coaster and 15 other rides.'}
    ]

    await Park.insertMany(parks)
}

const run = async () => {
    await main()
    db.close()
}

run()