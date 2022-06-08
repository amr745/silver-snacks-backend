const mongoose = require('mongoose');

const productSchema = new mongoose.Schema (
  {
    name: String,
    price: Number,
    quantity: Number,
    img: String,
    description: String,
  },
  {timestamps: true}
)

const Products = mongoose.model("Products", productSchema);

module.exports = Products