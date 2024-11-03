const mongoose = require('mongoose')
const profilSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Contact_Number : {
        type : Number,
        required : true,
    },
    Email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },    
},{timestamps : true});

module.exports = mongoose.model('Profile' , profilSchema)