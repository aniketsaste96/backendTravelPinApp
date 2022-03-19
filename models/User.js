const mongoose = require('mongoose');
//during any error check spellings here
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50


    },
    password: {
        type: String,
        required: true,
        min: 6,

    }
}, { timestamps: true })



module.exports = mongoose.model("User", UserSchema);

//here User is our model
//import in index.js