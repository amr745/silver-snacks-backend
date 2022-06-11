const Cart = require('../models/cartSchema');


//Update Cart
const update = async (req, res) => {
    try {
        if (req.body.userId) { res.json(await Cart.save(req.body)) }
        else {
            res.json("");
        }
    } catch (error) {
        res.status(400).json(error)
    }
};



module.exports = {
    update,
};