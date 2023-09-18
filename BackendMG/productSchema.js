
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    articleNumber:Number,
      name:String,
      description:String,
      price:Number,
      picture:String,
      category:String,
      numberAvailable:Number
});


module.exports= mongoose.model('Products',productSchema)

