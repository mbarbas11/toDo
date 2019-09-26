const express = require('express');
const router = express.Router(); //can mount handlers
const User = require('../models/user.js'); // ../ goes up in directory


router.get('/users', function(req, resp, next){ //receive user list
    resp.send({ type: 'GET' }); //type(type of request)
});

router.post('/users', function(req, resp, next){ //add new user
    User.create(req.body).then(function(user){
        resp.send(user);
    }).catch(next); //if fails calls catch to go to to middleware for error handling
    
    // returns promise, once completed, sends response....

    //console.log(req.body);
    /*
    resp.send({
        type: 'POST',
        name: req.body.name,
        level: req.body.level
        }); 
    */
});

router.put('/users/:id', function(req, resp, next){ //edit/update user (':' means var)
    resp.send({ type: 'PUT' });
});

router.delete('/users/:id', function(req, resp, next){  //remove user
    resp.send({ type: 'DELETE' }); 
});

module.exports = router;

