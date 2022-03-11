const Food = require('../models/Food');

//POST add restaurant specific menu
const addFood = async (req, res) => {
    try {
        const food = await Food.create(req.body);
        res.status(201).json({ food });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//GET get restaurant specific menu
const getFood = async (req, res) => {
    try {
        const { id: restaurantID }  = req.params;
        const food = await Food.find({ restaurant: restaurantID });
        res.status(200).json({ food });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

//PATCH update restaurant specific menu
const updateFood = async (req, res) => {
    try {
        const { id: foodID }  = req.params;
        const food = await Food.findOneAndUpdate({ _id: foodID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!food) {
            return res.status(404).json({ msg: `No food with id ${foodID}` })
        }
        res.status(200).json({ food });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteFood = async (req, res) => {
    try {
        const { id: foodID } = req.params;
        const food = await Food.findOneAndDelete({ _id: foodID });
        if (!food) {
            return res.status(404).json({ msg: `No food with id : ${foodID}` });
        }
        res.status(200).json({ food });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = { addFood, getFood, updateFood, deleteFood }