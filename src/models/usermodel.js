const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required: true,
    },
    lastName: String,
    mobile:{
        type: String,
        required : true,
        unique : true
    },
    age : Number,
    isIndian: Boolean,
    gender: {
        type: String,
        env: ["male","female","LGBTQ"]
    },
    DOB : String

},{ timestamps : true })



module.exports = mongoose.model('User',userSchema)   // users


