const Virtual = require('../models/Virtuals');

const setVirtual = async (req, res) => {
    try {
        const virtual = await Virtual.create(req.body);
        console.log(virtual);
        res.status(201).json({ virtual });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
}

module.exports = { setVirtual }