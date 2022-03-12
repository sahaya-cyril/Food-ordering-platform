const express = require('express')
const router = express.Router()

const { placeOrder, updateOrderStatus, getOrder } = require('../controllers/order');

router.route('/').post(placeOrder);
router.route('/:id').get(getOrder).patch(updateOrderStatus);

module.exports = router;