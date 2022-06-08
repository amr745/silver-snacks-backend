/////////////
//Middleware
/////////////
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/connection');
const logger = require('morgan');
const cors = require('cors');

/////////////
//Middleware
/////////////
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('cors'));

app.get('/', (req, res) => {
  res.status(200).json({message: "Root Directory"})
});

app.get('/products', async (req, res) => {
  
})



const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is live on port: ${PORT}`)
    })
  } catch (error) {
    console.log(`Catch error: ${error}`)
  }
};

start();


