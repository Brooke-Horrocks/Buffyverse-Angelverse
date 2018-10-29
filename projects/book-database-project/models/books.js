const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    author: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String,
        enum: ["Horror", "Fantasy", "Sci-fi", "Romance"] //FIXME: fill out rest of genres
    },
    bookCollection: {
        required: true,
        type: String,
        enum: ["owned", "wishlist", "recommendations"]
    },
    synopsis: String,
    thoughts: String,
    price: Number,
    recommendedBy: String
})

module.exports = mongoose.model("Book", bookSchema);