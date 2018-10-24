const mongoose = require("mongoose");
const { Schema } = mongoose;

const brandSchema = new Schema({
    name: String,
    location: String,
    size: Number
})

module.exports = mongoose.model("Brand", brandSchema);