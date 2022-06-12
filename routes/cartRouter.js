const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cartCtrl');

//INDUCES
router.put('/update', cartCtrl.update);
router.delete('/:id', cartCtrl.deleteCartItem);

module.exports = router;