const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
      firstName: String,
      lastName: String

});

module.exports= mongoose.model('OrderData', OrderSchema);


/*

      phone: Number,
      email: String,
      adress: String,
      city: String,
      postCode: Number

*/