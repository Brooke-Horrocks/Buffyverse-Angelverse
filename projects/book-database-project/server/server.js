const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/books", require("./routes/books"));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log("Successfully connected to MongoDB")
});

app.listen(process.env.PORT, () => {
    console.log(`Successfully connected on port ${process.env.PORT}`)
});