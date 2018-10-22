const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    makesNoise: {
        type: Boolean,
        default: true
    },
    description: String
})

module.exports = mongoose.model("Item", itemSchema);