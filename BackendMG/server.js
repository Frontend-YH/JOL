const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const databaseName = 'GardsjoSmedjan';


mongoose.connect(`mongodb+srv://mongo:jdQsqmYtqqAzyysD@cluster0.pt9awdy.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: databaseName
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Scheman för respektive Collection i MongoDB

const Schema = mongoose.Schema;
const productSchema = new Schema({
    articleNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      description: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      price: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      picture: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      category: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      numberAvailable: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
});

const customerDataSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      phoneNumber: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      city: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },     
      postcode: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      address: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
});

// Minimalt schema (inte optimalt, men dynamiskt vid byggande)
const minimalSchema = new mongoose.Schema({}, { strict: false });

const ProdModel = mongoose.model('DynamicModel', minimalSchema, 'CustomerData');


app.get('/products', async (req, res) => {
  try {
    const dBdata = await ProdModel.find();
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});