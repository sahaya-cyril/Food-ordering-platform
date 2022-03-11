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

//todo
const getOrderDetails = async (req, res) => {
    try {
        const order = await Order.find({});
        res.status(201).json({ order });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = { placeOrder, getOrderDetails }