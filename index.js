const express = require('express');
const bodyParser = require('body-parser');


//setup
const app = express();

//app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());

//route initalized
app.use('/api', require('./routes/api'));

/*IGNORE
//routehandler url localhost:2000/....logged message waiting for resp
app.get('/api',function(req, resp){
    console.log('hello');
    resp.send({ user: 'michael', id: 'mbarb009'});//resp.end(); //ends resp 
});
*/

app.listen(2000, function(){
    console.log('ready for req.');
});
