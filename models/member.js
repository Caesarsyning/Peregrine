const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// Mongoose automatically looks for the plural, lowercased version of your model name. 
const Member = mongoose.model('Member',memberSchema);

module.exports = Member
