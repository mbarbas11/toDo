const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//creating schema and model for user

//geo_loc schema
const geoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere" //type of map
    }
});

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Needs name field']
    },
    level:{
        type: String
    },
    available:{
        type : Boolean,
        default: false
    },
    geometry: geoSchema
    
});

const User = mongoose.model('user', userSchema) //structured based on schema

module.exports = User;