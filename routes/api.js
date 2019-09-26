const express = require('express');
const router = express.Router(); //can mount handlers
const User = require('../models/user'); // ../ goes up in directory


router.get('/users', function(req, resp, next){ //receive user list w/ geolocation
    /*User.find({}).then(function(ninjas){
        resp.send(users);
    })*/

    //GeoNear looks for coorindates nearby provided users
    User.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]}, //Latitude and Longitude
        {maxDistance: 100000, spherical: true} //distance in meters
    ).then(function(users){
        resp.send(users)
    });
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
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}).then(function(user){
            resp.send(user);
        }) 
});

router.delete('/users/:id', function(req, resp, next){  //remove user //communicate with mongodb to delete user
    //console.log(req.params.id); users/'1234' will get 12345
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        resp.send(user);
    }); //when finds id, returns user that will be removed
    
});

module.exports = router;

