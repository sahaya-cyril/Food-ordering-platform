const mongoose = require('mongoose');
const Order = require('../models/Order');

//POST place and order
const placeOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json({ order });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//GET restaurant specific orders
const getOrder = async (req, res) => {
    try {
        const ObjectId = mongoose.Types.ObjectId;
        const { id: restaurantID }  = req.params;

        const order = await Order.aggregate([
            {
                $match: {
                    restaurant: ObjectId(restaurantID),
                    orderStatus: 'Pending'
                }
            }
        ])
        res.status(201).json({ order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
}

//PATCH update order status
const updateOrderStatus = async (req, res) => {
    try {
        const { id: orderID }  = req.params;
        const order = await Order.findOneAndUpdate({ _id: orderID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!order) {
            return res.status(404).json({ msg: `No order with id ${orderID}` })
        }
        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = { placeOrder, getOrder, updateOrderStatus }