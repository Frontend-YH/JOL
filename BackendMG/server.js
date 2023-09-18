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

// Scheman för respektive Collection i MongoD
// Minimalt schema (inte optimalt, men dynamiskt vid byggande)
const minimalSchema = new mongoose.Schema({}, { strict: false });

const ProdModel = mongoose.model('DynamicModel', minimalSchema, 'Products');
const customerModel = mongoose.model('DynamicModel', minimalSchema, 'CustomerData');

//hämtar alla produkter
app.get('/products', async (req, res) => {
  try {
    const dBdata = await ProdModel.find();
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//hämtar alla kunder
app.get('/CustomerData', async (req, res) => {
  try {
    const dBdata = await customerModel.find();
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Hämtar bara id för kunder.
app.get('/CustomerID', async (req, res) => {
  try {
    const dBdata = await customerModel.distinct("_id", {});
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});