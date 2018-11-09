const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/api/books", require("./routes/books"));


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log("Successfully connected to MongoDB")
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

app.listen(process.env.PORT, () => {
    console.log(`Successfully connected on port ${process.env.PORT}`)
});