const express = require('express');
const mongoose = require("mongoose");


// Fake data to access
const candies = require('./candy.json');
const flavores = require('./')

// Create express server
const app = express();

app.use(express.json());
app.use(logger)
app.use('/api/candies', require('./routes/candies'));

app.use(errorHandler)



// Tell server to listen for requests on specific port
app.listen(8000, () => {
    console.log('Successfully running on port 8000');
}); 