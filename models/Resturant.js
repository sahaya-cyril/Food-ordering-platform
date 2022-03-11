const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    location: {
        type: String,
        required: [true, 'Please provide a location'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone no']
    },
    openHours: {
        type: String,
        required: [true, 'Please provide open hours'],
        trim: true
    },
})

module.exports = mongoose.model('Restaurant', restaurantSchema);