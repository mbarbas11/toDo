const express = require('express');
const router = express.Router(); //can mount handlers

router.get('/users', function(req, resp){ //receive user list
    resp.send({ type: 'GET' }) //type(type of request)
});

router.post('/users', function(req, resp){ //add new user
    resp.send({ type: 'POST' }) 
});

router.put('/users/:id', function(req, resp){ //edit/update user (':' means var)
    resp.send({ type: 'PUT' }) 
});

router.delete('/users/:id', function(req, resp){  //remove user
    resp.send({ type: 'DELETE' }) 
});