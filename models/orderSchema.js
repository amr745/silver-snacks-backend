const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        userId: String,
        orderId: String,
        products: Array,
    },
    { timestamps: true }
)

const Order = mongoose.model("Order", orderSchema);

module.exports = Order