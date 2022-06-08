const mongoose = require('mongoose');

const productSchema = new mongoose.Schema (
  {


  },
  {timestamps: true}
)

const Products = mongoose.model("Products", productSchema);

module.exports = Products