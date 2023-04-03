const express = require('express');
const router = express.Router();
const farmController = require('../controllers/fieldController');

router.post('/', farmController.handlePostField)

router.get('/:farmId', farmController.handleGetFields)


module.exports = router;