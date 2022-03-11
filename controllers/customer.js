const Customer = require('../models/Customer');

const addcustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json({ customer });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getcustomer = async (req, res) => {
    try {
        const customer = await Customer.find({});
        res.status(200).json({ customer });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updatecustomer = async (req, res) => {
    try {
        const { id: customerID }  = req.params;
        const customer = await Customer.findOneAndUpdate({ _id: customerID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!customer) {
            return res.status(404).json({ msg: `No customer with id ${customerID}` })
        }
        res.status(200).json({ customer });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deletecustomer = async (req, res) => {
    try {
        const { id: customerID } = req.params;
        const customer = await Customer.findOneAndDelete({ _id: customerID });
        if (!customer) {
            return res.status(404).json({ msg: `No customer with id : ${customerID}` });
        }
        res.status(200).json({ customer });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports ={ addcustomer, getcustomer, updatecustomer,  deletecustomer }