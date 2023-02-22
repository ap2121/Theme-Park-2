const {Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('Root Test'))
//park routes
router.get('/parks', controllers.getAllParks)
router.get('/parks/:id', controllers.getParkById)
router.delete('/parks/:id', controllers.deletePark)
router.post('/parks', controllers.createPark)

//ride routes
router.get('/rides', controllers.getAllRides)
router.get('/rides/:id', controllers.getRideById)
router.delete('/rides/:id', controllers.deleteRide)
router.post('/rides', controllers.createRide)
router.get('/rides/parks/:id', controllers.getRideByParkId)

module.exports = router