require('dotenv').config();
require('./config/database').connect();
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/",require('./routers/routers'))

module.exports = app;


