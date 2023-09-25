const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  // You can specify your own unique identifier here
  _id: mongoose.Schema.Types.ObjectId,

  articleNumber: Number,
  name: String,
  description: String,
  price: Number,
  picture: String,
  category: String,
  numberAvailable: Number
});


module.exports= mongoose.model('Products',productSchema);