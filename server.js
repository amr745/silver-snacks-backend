/////////////
//Dependencies
/////////////
require('dotenv').config();
const express = require('express');
const colors = require('colors');
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/connection');
const logger = require('morgan');
const cors = require('cors');
const Product = require('./models/productSchema');

/////////////
//Middleware
/////////////
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cors());

/////////////
//Routes
/////////////
app.get('/', (req, res) => {
  res.status(200).json({message: "Root Directory"})
});

//Index
app.get('/products', async (req, res) => {
  try {
    res.json(await (await Product.find({})).reverse())
  } catch (error) {
    res.status(400).json(error)
  }
})

//Delete
app.delete('/products/:id', async (req, res) => {
  try {
    res.json(await Product.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
});

//Update
app.put('/products/:id', async (req, res) => {
  try {
    res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    res.status(400).json(error)
  }
});

//Create
app.post('/products', async (req, res) => {
  try {
    console.log(req.body)
    res.status(201).json(await Product.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
});

//Show
app.get('/products/:id', async (req, res) => {
  try {
    res.status(200).json(await Product.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
});

/////////////
//Server listener
/////////////
const start = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is live on port: ${PORT}`)
    })
  } catch (error) {
    console.log(`Catch error: ${error}`)
  }
};

start();


