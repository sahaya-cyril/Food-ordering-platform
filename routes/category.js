const express = require('express')
const router = express.Router()

const { categoryCount } = require('../controllers/category');

router.route('/:id').get(categoryCount);

module.exports = router