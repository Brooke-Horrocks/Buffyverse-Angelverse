const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
    fileName: String,
    path: String,
    originalName: String,
    photographer: String
});

module.exports = mongoose.model("Image", imageSchema);