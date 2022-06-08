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
const usersRouter = require("./routes/userRouter");


/////////////
//Middleware
/////////////
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/////////////
//Routes
/////////////
const productRouter = require('./routes/productRouter');
app.use('/products', productRouter);

app.use("/users", usersRouter);
// Mount our custom auth middleware to protect routes below it
app.use(require("./config/auth"));

app.get('/', (req, res) => {
  res.status(200).json({ message: "Root Directory" })
})

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


