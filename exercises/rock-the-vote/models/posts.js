const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    description: String,
    upvotes: {
        type: Number, 
        default: 0
    },
    downvotes: {
        type: Number, 
        default: 0
    },
    comments: [
        {
            text: String,
            author: String
        }
    ]
});

module.exports = mongoose.model("Post", postSchema);