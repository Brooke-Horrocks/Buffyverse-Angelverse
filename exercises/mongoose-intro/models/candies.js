const mongoose = require("mongoose");
const { Schema } = mongoose;

const candySchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    price: Number,
    eaten: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Candy", candySchema);