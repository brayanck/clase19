const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  age:{
    type:Number,
    required:true
  },
  password: {
    type: String,
    required: true
  }

});

const Email = mongoose.model('User', emailSchema);
module.exports = Email;