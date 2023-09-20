const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const Product = require('./productSchema')
const CustomerData = require('./customerSchema')

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// ############## Uppkoppling mot MongoDB Atlas ##########################################################################
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
// ########################################################################################################################


// ################## Lösenordskryptering #############################################
const bcrypt = require('bcrypt');
const saltRounds = 10;

// funktion för att kryptera ett lösenord
function encryptPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

//funktion för att jämföra ett okrypterat lösenord med ett krypterat
function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}
// ####################################################################################


// ############# Scheman för respektive Collection i MongoDB ##########################
// Minimalt schema (inte optimalt, men dynamiskt vid byggande)
const minimalSchema = new mongoose.Schema({}, { strict: false });

const ProdModel = mongoose.model('DynamicModel', minimalSchema, 'Products');
const customerModel = mongoose.model('DynamicModel', minimalSchema, 'customerdatas');
// ####################################################################################


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
app.get('/customers', async (req, res) => {
  try {
    const dBdata = await customerModel.find();
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Hämtar bara id för kunder.
//app.get('/CustomerID', async (req, res) => {
  //try {
    //const dBdata = await customerModel.distinct("_id", {});
    //res.json(dBdata);
  //} catch (error) {
    //console.error('Error fetching data:', error);
    //res.status(500).json({ error: 'Internal Server Error' });
 // }
//});


app.post('/newCustomerData', async (req, res) => {
  try {
    const dBdata = await ProdModel.find();
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//Spara produkter i databasen.
app.post('/addProduct', async (req, res) => {
let data = Product(req.body);
const result = await data.save();
res.send(result);
});

//Spara kunder i databasen
app.post('/addCustomer', async (req, res) => {
  let data = CustomerData(req.body);
  const result = await data.save();
  res.send(result);
  });






app.get("/admins", (req, res) => {

      res.json({"admin": "gardsjosmedja"});

})


const admins = [
  {
    "email": "admin@gardsjosmedja.com",
    "password": "hemligt"
  }
]


// LOGGA IN USER
app.post('/admins/login', (req, res) => {

  const { email, password } = req.body;

  let filteredUser = admins.find(user => user.email == email);

      if (filteredUser===undefined) { 
          res.status(401).json({ "status": 'Invalid login credentials'}); 
      } 
      else {

          // jämför det angivna lösenordet med det lagrade och krypterade
          //const passwordMatch = comparePassword(password, filteredUser.password);
          let filteredPassword = admins.find(user => user.password == password);
      
          if (filteredPassword) {
          res.status(200).json({ status: "Login successful"});
          } else {
          res.status(401).json({ status: "Invalid password credentials"});
          }

      }

});




