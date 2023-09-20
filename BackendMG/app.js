const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// CORS konfiguration som allowar access från http://localhost:5137
const corsOptions = {
  origin: 'http://localhost:5137',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // tillåtna metoder
  optionsSuccessStatus: 204, 
};

// Aktivera vors med vald cors-konfiguration
app.use(cors(corsOptions));

app.use(express.json());

const Product = require('./productSchema')
const Customer = require('./customerSchema')

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

const InfoModel = mongoose.model('DynamicModel', minimalSchema, 'Information');
const ProdModel = mongoose.model('DynamicModel', minimalSchema, 'Products');
const customerModel = mongoose.model('DynamicModel', minimalSchema, 'CustomerData');
const LoginModel = mongoose.model('DynamicModel', minimalSchema, 'LogIn');
// ####################################################################################


//hämtar informationstexter 
app.get('/information', async (req, res) => {
  try {
    const dBdata = await InfoModel.find();
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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
  let data = Customer(req.body);
  const result = await data.save();
  res.send(result);
  });






app.get("/admins", (req, res) => {

      res.json({"admin": "admin"});

})

/*
// Är numera lagt i MongoDB Atlas
// i LogIn collectionen
const admins = [
  {
    "username": "admin",
    "password": "hemligt"
  }
]
*/

// Logga in ADMIN i adminpanelen i Frontendet vid en fetch POST till /admin/login
// Vid korrekt POST username och password skickat till backendet så returnas:
// 200 OK och {"Status": "Login successful"}
app.post('/admins/login', async (req, res) => {

  const { username, password } = req.body;

  try {
    const dBdata = await LoginModel.find();
    let filteredUser = dBdata.find(user => user.username == username);
    if (filteredUser===undefined) { 
        res.status(401).json({ "status": 'Invalid login credentials'}); 
    } 
    else {
        // jämför det angivna lösenordet med det lagrade och krypterade
        //const passwordMatch = comparePassword(password, filteredUser.password);
        let filteredPassword = dBdata.find(user => user.password == password);
    
        if (filteredPassword) {
        res.status(200).json({ status: "Login successful"});
        } else {
        res.status(401).json({ status: "Invalid password credentials"});
        }
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }


});




