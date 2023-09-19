const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine');

//data
const fruits = require("./models/fruits");
const veggies = require("./models/veggies");

// adding our view templates
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

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
    
    // New - get the form to add a new fruit
    app.get('/fruits/new', (req, res) => {
        res.render('viewFruits/New');
    });
    // New - get the form to add a new veggie
    app.get('/veggies/new', (req, res) => {
        res.render('viewsVeggies/New');
    });

//Delete
//Update
//Create - fruits
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    // res.send('data received');
    // send user back to main page
    res.redirect('/fruits'); 
});
// Create - veggies
app.post('/veggies', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(veggies);
    // res.send('data received');
    // send user back to main page
    res.redirect('/veggies'); 
});

//Edit

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