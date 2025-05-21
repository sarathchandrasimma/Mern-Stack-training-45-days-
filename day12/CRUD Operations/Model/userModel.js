const mongoose = require('mongoose');

// Define the schema for User collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
}, { timestamps: true });

// Create the model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
