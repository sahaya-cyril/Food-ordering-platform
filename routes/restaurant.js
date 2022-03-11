const express = require('express')
const router = express.Router()

const { getAllRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurant');

router.route('/').get(getAllRestaurant).post(createRestaurant);
router.route('/:id').patch(updateRestaurant).delete(deleteRestaurant);

module.exports = router
