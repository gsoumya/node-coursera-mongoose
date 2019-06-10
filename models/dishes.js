const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    })

const dishSchema = new Schema({
    name: {
        required: true,
        type: String,
        unique: true
    },
    description: {
        required: true,
        type: String
    },
    comments: [commentSchema]
},
    {
        timestamps: true
    })

var dishes = mongoose.model("dish", dishSchema);
module.exports = dishes;