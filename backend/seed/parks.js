const db = require('../db')
const Park = require('../models/park')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const parks = [
    {
      image:
        'https://i.insider.com/5a94606e3aab0529008b475b?width=700&format=jpeg&auto=webp',
      name: 'Joyland Amusement Park',
      location: 'Kansas, USA',
      dateClosed: '2006',
      description:
        'Joyland Amusement Park was an amusement park in Wichita, Kansas, United States. It was in continuous operation for 55 years, from June 12, 1949 to 2004, closing permanently in 2006.[1] It was once the largest theme park in central Kansas and featured a wooden roller coaster and 15 other rides.'
    },
    {
      image:
        'https://i2.wp.com/www.alltherooms.com/blog/wp-content/uploads/2019/01/jordan-opel-697403-unsplash.jpg?zoom=2&resize=613%2C461&ssl=1',
      name: 'Six Flags New Orleans',
      location: 'Louisiana, USA',
      dateClosed: '2005',
      description:
        'Six Flags New Orleans originally opened as Jazzland, with ownership transferring ot Six Flags following bankruptcy proceedings.  After Hurricane Katrina, the park was shuttered, and was permanently closed due to the severity of the damage.'
    },
    {
      image:
        'https://i2.wp.com/www.alltherooms.com/blog/wp-content/uploads/2019/01/Gullivers-Kingdom-Yamanashi-Japan-By-Urban-Ghosts-Media.jpg?zoom=2&resize=613%2C409&ssl=1',
      name: `Gulliver's Kingdom`,
      location: 'Yamanashi, Japan',
      dateClosed: '2001',
      description:
        'The demise of this park was in part due to its proximity to the headquarters of a religous cult, but ultimately closed due to defaulting bank loans.'
    },
    {
      image:
        'https://i2.wp.com/www.alltherooms.com/blog/wp-content/uploads/2019/01/Pripyat-Amusement-Park-Chernobyl-Ukraine-By-greentourua-com.jpg?zoom=2&resize=613%2C409&ssl=1',
      name: 'Pripyat Amusement Park',
      location: 'Pripyat, Ukraine',
      dateClosed: '1986',
      description:
        'A few days before the grand opening, the Chernobyl Nuclear disaster occured at the power plant located intown, resulting in the evacuation and abandonement of the city.'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/SegaWorld_London_Rocket_Entrance_1.png/1920px-SegaWorld_London_Rocket_Entrance_1.png',
      name: 'SegaWorld London',
      location: 'London, England',
      dateClosed: '2000',
      description:
        'Opened in 1996 as the flagship of Sega in Europe, claiming to be the largest indoor theme park in the world.Closed due to lagging attendance and a departure from Sega in the operation.  Later reopened and rebranded as Funland, which closed in 2011.'
    }
  ]

  await Park.insertMany(parks)
}

const run = async () => {
  await main()
  db.close()
}

run()
