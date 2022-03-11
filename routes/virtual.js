const express = require('express')
const router = express.Router()

const { setVirtual } = require('../controllers/virtual');

router.route('/').post(setVirtual);

module.exports = router;