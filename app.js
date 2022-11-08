const express = require("express");
const bodyParser = require("body-parser");  
const cors = require("cors");
const { API_VERSION } = require("./constants");

const app = express();

// Import Rounting
// ...

// Configure Body Parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configure static files
app.use(express.static("uploads"));

// Configure Header HTTP - CORS
app.use(cors())

// Configure Routings
// ...

module.exports = app;
 