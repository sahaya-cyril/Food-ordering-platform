const express = require('express')
const router = express.Router()

const { addFood, getFood, updateFood, deleteFood } = require('../controllers/food');

router.route('/').post(addFood);
router.route('/:id').get(getFood).patch(updateFood).delete(deleteFood);

module.exports = router