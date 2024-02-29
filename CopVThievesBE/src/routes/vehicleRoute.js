const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/getVehicles', vehicleController.getVehicles);
router.post('/getVehicleStatus', vehicleController.getVehicleStatus)

module.exports = router;
