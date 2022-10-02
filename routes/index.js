const express = require('express');
const noteRoute = require('./noteRoutes')

const app = express();
app.use('/notes', noteRoute);

module.exports = app;