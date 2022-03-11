const express = require('express')
const router = express.Router()

const { placeOrder, getOrderDetails } = require('../controllers/order');

router.route('/').get(getOrderDetails).post(placeOrder);

module.exports = router;