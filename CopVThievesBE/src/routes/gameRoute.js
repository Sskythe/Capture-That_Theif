const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/simulate', gameController.simulateThiefLocation);
router.post('/capture', gameController.checkCaptureState);

module.exports = router;
