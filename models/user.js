const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//creating schema and model for user
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
    }

});

const User = mongoose.model('user', userSchema) //structured based on schema

module.exports = User;