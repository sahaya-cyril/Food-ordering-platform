const express = require('express');
const app = express();
const connectDB = require('./db/connect');

require('dotenv').config();

const restaurant = require('./routes/restaurant');
const customer = require('./routes/customer');
const food = require('./routes/food');
const category = require('./routes/category');
const order = require('./routes/order');
const virtual = require('./routes/virtual');

// middleware
app.use(express.json());

// routes
app.use('/api/v1/', restaurant);
app.use('/api/v1/customer/', customer);
app.use('/api/v1/food/', food);
app.use('/api/v1/category/', category);
app.use('/api/v1/order/', order);
app.use('/api/v1/virtual/', virtual);

//api

// *Restaurant*
// app.get('/api/v1/')          - GET all restaturant
// app.post('/api/v1/')         - POST create restaurant
// app.patch('/api/v1/:id')     - PATCH update restaurant
// app.delete('/api/v1/:id')    - DELETE delete restaurant

// *Customer*
// app.get('/api/v1/customer')           - GET all customer
// app.post('/api/v1/customer')          - POST create customer
// app.patch('/api/v1/customer/:id')     - PATCH update customer details
// app.delete('/api/v1/customer/:id')    - DELETE delete customer



const port = process.env.PORT || 3000;

const start = async () => {
    try {
        console.log(process.env.MONGO_URI);
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    } catch(error) {
        console.log(error);
    }
}

start()