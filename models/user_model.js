const mongoose = require('mongoose');



var userSchema = mongoose.Schema({

    fullname: {  type: String, required: true 
    },
   
    email: {
        type: String,  required: true
    },
 
    sex: {
        type: String,  required: true
    },
 
    dob: {
        type: String, required: true
    } ,
    address: {
        type: String, required: true
    } ,
    status: {
        type: Boolean, default: false
    } 

});

mongoose.model('user', userSchema)