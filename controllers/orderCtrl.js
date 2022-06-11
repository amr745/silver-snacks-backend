const Order = require('../models/orderSchema');


//Create Order
const postcart = async (req, res) => {
    try {
        res.json(await Order.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
};



module.exports = {
    postcart,
};