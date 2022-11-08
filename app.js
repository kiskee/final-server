const express = require("express");
const bodyParser = require("body-parser");  
const cors = require("cors");
const { API_VERSION } = require("./constants");

const app = express();

// Import Rounting
const authRoutes = require("./router/auth");

// Configure Body Parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configure static files
app.use(express.static("uploads"));

// Configure Header HTTP - CORS
app.use(cors())

// Configure Routings
app.use(`/api/${API_VERSION}`,authRoutes)

module.exports = app;
 