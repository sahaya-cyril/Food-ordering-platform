const express = require('express')
const router = express.Router()

const { addcustomer, getcustomer, updatecustomer, deletecustomer } = require('../controllers/customer');

router.route('/').get(getcustomer).post(addcustomer);
router.route('/:id').patch(updatecustomer).delete(deletecustomer);

module.exports = router