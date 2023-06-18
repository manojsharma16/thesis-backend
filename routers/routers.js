const express = require('express');
const router = express.Router();
const userRoute = require('./v1/user.router.js');

router.use('/v1',userRoute)

module.exports = router;