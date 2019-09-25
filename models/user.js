const mongoose = require ('mongoose');
const schema = mongoose.schema;

//creating schema and model for user
const userSchema = new schema({
    name:{
        type: String,
        required: [true, 'Needs name field']
    },
    rank:{
        type: String
    },
    available:{
        type : Boolean,
        default: false
    }

});

const User = mongoose.model('user', userSchema) //structured based on schema

module.export = User;