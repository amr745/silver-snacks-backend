const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl');

//INDUCES

router.get('/', productCtrl.index);
router.get('/seed', productCtrl.seed);
router.get('/:id', productCtrl.show);
router.put('/:id', productCtrl.update);
router.delete('/:id', productCtrl.delete);

module.exports = router;