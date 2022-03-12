const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Restaurant",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        food: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Food",
        },
        amount: {
          type: Number,
          default: function() {
            return this.qty * this.price;
          }
        }
      },
    ],
    amount: {
      type: Number,
      required: true,
      default: function() {
            const a = this.orderItems.map((post) => post.amount);
            return a.reduce((a, b) => a + b, 0);
          }
    },
    gstAmount: {
      type: Number,
      required: true,
      default: function() {
        return this.amount * 0.18;
      }
    },
    totalPrice: {
      type: Number,
      required: true,
      default: function() {
        return this.amount + this.gstAmount;
      },
    },
    orderStatus: {
      type: String,
      require: true,
      enum: ['Pending', 'Accept', 'Reject'],
      default: 'Pending',
    },
    reason: {
      type: String,
    }
  },
)

module.exports = mongoose.model("Order", orderSchema)