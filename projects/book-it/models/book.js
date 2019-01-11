const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true, 
        enum: ["Horror", "Sci-fi", "Romance", "Fantasy", "Other"]
    },
    bookCollection: {
        type: String,
        required: true,
        enum: ["owned", "wishlist", "recommendations"]
    },
    synopsis: String,
    thoughts: String,
    price: Number,
    recommendedBy: String
});

module.exports = mongoose.model("Book", bookSchema);