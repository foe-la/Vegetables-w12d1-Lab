const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine');

//data
const fruits = require("./models/fruits");
const veggies = require("./models/veggies");

// adding our view templates
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//routes
// Index route
// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
    app.get('/fruits/', function(req, res){
        res.render('viewFruits/Index', { fruits: fruits });
    });   
    app.get('/veggies/', function(req, res){
        res.render('viewsVeggies/Index', { veggies: veggies });
    });         


// Show route - one particular fruit by ID
// app.get("/fruits/:indexOfFruitsArray", (req, res) => {
// res.send(fruits[req.params.indexOfFruitsArray])});
app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});
app.get('/veggies/:indexOfVeggiesArray', function(req, res){
    res.render('veggies/Show', { //second param must be an object
        veggie: veggies[req.params.indexOfVeggiesArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});
      
app.listen(3000, () => {
    console.log('listening');
});