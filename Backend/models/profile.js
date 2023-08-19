const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfileSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    phone_no:{
        type: Number,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    skills:{
        type: String,
       required: true
    
    },
    experience:{
        type: String,
       required: true
    
    },
    education:{
        type: String,
       required: true
    
    },
    date:{
        type: Date,
        default: Date.now
    
    }
});

module.exports = mongoose.model('profile',ProfileSchema)