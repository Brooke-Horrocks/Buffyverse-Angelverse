const express = require('express');
const mongoose = require('mongoose')
const fs = require('fs');
const multer = require("multer")

require('dotenv').config();

const upload = multer({
    dest: "./temp",
    limit: { fileSize : 1000000}
})

const app = express();

app.use(express.json());

app.route("/api/images")
    .post(upload.single("file"), (req, res, next) => {

    })

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log("Successfully connected to MongoDB");
});

app.listen(process.env.PORT, () => {
    console.log(`Successfully connected on port ${process.env.PORT}`);
});