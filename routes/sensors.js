const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.post('/', sensorController.handlePostSensor)

router.get('/', sensorController.handleGetSensors)

module.exports = router;