const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//middleware
app.use(express.json());
app.use("/api/items", require("./routes/items"));

//handle error middleware
app.use((err, req, res, next) => {
    res.send({ message: err.message })
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log(`Connected to MongoDB`);
})

app.listen(process.env.PORT, () => {
    console.log(`Connected on port ${process.env.PORT}`);
});