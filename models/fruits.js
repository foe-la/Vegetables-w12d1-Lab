// Step 1. Import Mongoose
const mongoose = require('mongoose');

// Step 2. Create data schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    readyToEat: {
        type: Boolean,
    }
});

// Step 3. Create model using schema *should be uppercase
const Fruit = mongoose.model('Fruit', fruitSchema);

// Step 4. Export newly created Model
module.exports = Fruit;

// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     },
//     {
//         name: 'grapes',
//         color: 'purple',
//         readyToEat: true
//     },
//     {
//         name: 'oranges',
//         color: 'orange',
//         readyToEat: false
//     }

// ];

// module.exports = fruits;