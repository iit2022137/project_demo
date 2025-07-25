// Libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Database connection
const connectDB = require('./database/connection');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;
var path = require('path');

const app = express();

// Database connection
// require('./database/connection');

// Product Model
const Product = require('./models/Product');

// Routes
const router = require('./routes/router');

connectDB(); // Call the connection function
// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(""));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use('/api', router);

// For deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "frontend/build", "index.html"));
  });
}

// Server
app.listen(port, function() {
  console.log("Server started at port " + port);
})

// ===== To store data from productsData.js =====
// const defaultData = require('./defaultData');
// defaultData();