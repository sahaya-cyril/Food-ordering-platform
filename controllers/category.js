const Food = require('../models/Food');
const mongoose = require('mongoose');

//GET category count
const categoryCount = async (req, res) => {
    try {
        const ObjectId = mongoose.Types.ObjectId;
        const { id: restaurantID }  = req.params;

        const food = await Food.aggregate([
            {
                $match: {
                    restaurant: ObjectId(restaurantID)
                }
            }
            ,{
                $group: {
                    _id: "$category",
                    "list": {
                        $push: "$$ROOT"
                    },
                }
            }
        ])
        Object.entries(food).forEach(([ key,value ]) => {
            var key = value._id;
            var count = value.list.length;
            console.log(key, count);
        })
        res.status(201).json({ food });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = { categoryCount }
