const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    firstName:String,
      lastName:String,
      phoneNumber:Number,
      email:String,
      adress:String,
      city:String,
      postCode:Number
});

module.exports= mongoose.model('customerData',CustomerSchema);