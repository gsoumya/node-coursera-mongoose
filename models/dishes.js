const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const dishSchema = new Schema({
    name : {
        required: true,
        type: String,
        unique: true
    },
    description : {
        required: true,
        type: String
    }},
    {
        timestamps: true
    })

    var dishes = mongoose.model("dish", dishSchema);
    module.exports = dishes;