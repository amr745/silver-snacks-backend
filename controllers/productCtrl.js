const Product = require('../models/productSchema');

const seed = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json(await Product.create(productSeed))
  } catch (error) {
    res.status(400).json(error)
  }
};

const index = async (req, res) => {
  try {
    res.json(await (await Product.find({})).reverse())
  } catch (error) {
    res.status(400).json(error)
  }
};

//Delete
const deleteProduct = async (req, res) => {
  try {
    res.json(await Product.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
};

//Update
const update = async (req, res) => {
  try {
    res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    res.status(400).json(error)
  }
};


//Show
const show = async (req, res) => {
  try {
    res.status(200).json(await Product.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
};


module.exports = {
  index,
  delete: deleteProduct,
  update,
  seed,
  // create,
  show
};