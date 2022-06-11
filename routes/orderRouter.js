const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/orderCtrl');

//INDUCES
router.post('/ordersubmit', orderCtrl.postcart);

module.exports = router;