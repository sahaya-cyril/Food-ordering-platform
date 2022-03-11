const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema);