const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        userId: String,
        products: Array,
    },
    { timestamps: true }
)

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart