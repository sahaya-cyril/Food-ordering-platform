const mongoose = require('mongoose');

const virtualSchema = mongoose.Schema({
    amount: {
      type: Number,
      required: true
    },
    qty: {
      type: Number,
      required: true
    },
    array: [
        {
            no: { type: Number, required: true }
        }
    ],
    totalAmount: {
        type: Number,
        require: true,
        default: function() {
            return this.array[0].no
        }
    }
})

module.exports = mongoose.model('Virtual', virtualSchema);