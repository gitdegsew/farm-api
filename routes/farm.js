const express = require('express');
const router = express.Router();
const farmController = require('../controllers/farmController');

router.post('/', farmController.handleFarm);

module.exports = router;