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
    },
    flavors: [{
        type: Schema.Types.ObjectId,
        ref: "Flavor"
    }],
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand"
    }
})

module.exports = mongoose.model("Candy", candySchema);