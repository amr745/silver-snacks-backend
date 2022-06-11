const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        _id: String,
        userId: String,
        products: Array,
    },
    { timestamps: true }
)

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart