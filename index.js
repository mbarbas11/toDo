const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup
const app = express();

//mongodb connection
//mongoose.connect('mongodb://localhost/gouser', {useNewUrlParser = true });

mongoose.connect("mongodb://localhost/usergo", { useNewUrlParser: true , useUnifiedTopology: true});
//IGNORE mongoose.Promise = global.Promise; //deprecated..overriding

//app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

//route initalized
app.use('/api', require('./routes/api'));

/*IGNORE
//routehandler url localhost:2000/....logged message waiting for resp
app.get('/api',function(req, resp){
    console.log('hello');
    resp.send({ user: 'michael', id: 'mbarb009'});//resp.end(); //ends resp 
});
*/

app.listen(process.env.port || 2000, function(){
    console.log('ready for req.');
});
