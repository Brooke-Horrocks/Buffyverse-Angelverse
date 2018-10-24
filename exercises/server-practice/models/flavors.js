const mongoose = require("mongoose");
const { Schema } = mongoose;

const flavorSchema = new Schema({
    color: String,
    sweet: Boolean,
    description: String
})

module.exports = mongoose.model("Flavor", flavorSchema);