const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Restaurant",
    },
    category: {
        type: String,
        required: [true, 'Please provide a category'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    image: {
        type: String,
        required: [true, 'Please provide a image'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price']
    }
})

module.exports = mongoose.model('Food', foodSchema);