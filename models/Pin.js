const mongoose = require('mongoose');
//during any error check spellings here
const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        min: 3
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    lat: {
        type: Number,
        required: true,

    },
    long: {
        type: Number,
        required: true,

    }

}, { timestamps: true })



module.exports = mongoose.model("Pin", PinSchema);

//here User is our model
//import in index.js
