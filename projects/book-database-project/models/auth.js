const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const authSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

authSchema.save("pre", function(next) {
    const user = this;

    if(!user.isModified("password")) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

authSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    });
};

authSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model("Auth", authSchema);