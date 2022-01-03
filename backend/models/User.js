const mongoose = require('mongoose');
const { number } = require('yup');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { 
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number
    }
}, {
    collection: 'users'
})

module.exports = userSchema;