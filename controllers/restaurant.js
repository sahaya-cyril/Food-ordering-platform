const Restaurant = require('../models/Resturant');

const getAllRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({});
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json({ restaurant });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateRestaurant = async (req, res) => {
    try {
        const { id: restaurantID }  = req.params;
        const restaurant = await Restaurant.findOneAndUpdate({ _id: restaurantID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!restaurant) {
            return res.status(404).json({ msg: `No restaurant with id ${restaurantID}` })
        }
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const { id: restaurantID } = req.params;
        const restaurant = await Restaurant.findOneAndDelete({ _id: restaurantID });
        if (!restaurant) {
            return res.status(404).json({ msg: `No restaurant with id : ${restaurantID}` });
        }
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports ={ getAllRestaurant, createRestaurant, updateRestaurant, deleteRestaurant }