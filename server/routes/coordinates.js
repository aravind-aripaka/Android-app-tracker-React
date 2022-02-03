const express = require('express');
const router = express.Router();
const Coordinates = require('../models/coordinate');


router.get('/',async (req, res) => {
    try{
        const coordinates = await Coordinates.find()
        res.status(200).json(coordinates);
    } catch (err) {
        res.status(500).json({ messsage: err.message})
    }
})

router.post('/', async (req, res) => {
    const coordinate = new Coordinates({
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      altitude: req.body.altitude,
      accuracy: req.body.accuracy,
      speed: req.body.speed
    })
    try {
      const latitude = await coordinate.save()
      res.status(201).json(latitude)
      const longitude = await coordinate.save()
      res.status(201).json(longitude)
      const altitude = await coordinate.save()
      res.status(201).json(altitude)
      const accuracy = await coordinate.save()
      res.status(201).json(accuracy)
      const speed = await coordinate.save()
      res.status(201).json(speed)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

router.patch('/',(req, res) => {

})

module.exports = router 