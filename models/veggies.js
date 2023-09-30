// Step 1. Import Mongoose
const mongoose = require('mongoose');

// Step 2. Create data schema
const veggieSchema = new mongoose.Schema({
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
const Veggie = mongoose.model('Veggie', veggieSchema);

// Step 4. Export newly created Model
module.exports = Veggie;

// const veggies = [
//     {
//         name:'cabbage',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'carrot',
//         color: 'orange',
//         readyToEat: true
//     },
//     {
//         name:'kale',
//         color: 'dark green',
//         readyToEat: false
//     },
//     {
//         name: 'corn',
//         color: 'yellow',
//         readyToEat: false
//     },
//     {
//         name: 'cauliflower',
//         color: 'white',
//         readyToEat: true
//     }

// ];

// module.exports = veggies;