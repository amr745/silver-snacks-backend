const Cart = require('../models/cartSchema');
const mongoose = require('mongoose');

//Update Cart
const update = async (req, res) => {
    console.log(req.body)
    try {
        if (req.body.userId) {
            let query = {
                userId: req.body.userId
            };
            let update = { products: req.body.products };
            let options = { upsert: true, new: true, setDefaultsOnInsert: true };
            let resModel = await Cart.findOneAndUpdate(query, update, options);
            res.json(resModel)
        }
        else {
            res.json("");
        }
    } catch (error) {
        console.log("update err ", error);
        res.status(400).json(error)
    }
};

const deleteCartItem = async (req, res) => {
    try {
        res.status(204).json(await Cart.findByIdAndDelete(req.params.id));

        } catch (error) {

        console.log("delete err ", error);
        res.status(400).json(error)
    }
};



module.exports = {
    update,
    deleteCartItem
};