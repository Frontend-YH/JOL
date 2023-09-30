const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// CORS konfiguration som allowar access från http://localhost:5137
/*
const corsOptions = {
  origin: 'http://localhost:5137/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // tillåtna metoder
  optionsSuccessStatus: 204, 
};
*/

// Aktivera vors med vald cors-konfiguration
app.use(cors());

app.use(express.json());

const Product = require('./productSchema')
const CustomerData = require('./customerSchema')
const Order = require('./orderSchema')

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
const CategoryModel = mongoose.model('DynamicModel', minimalSchema, 'Categories');
const CustomerModel = mongoose.model('DynamicModel', minimalSchema, 'customerdatas');
const LoginModel = mongoose.model('DynamicModel', minimalSchema, 'LogIn');
const OrderData = mongoose.model('DynamicModel', minimalSchema, 'OrderData')
const AddProducts = mongoose.model('DynamicModel', minimalSchema, 'Products')
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


//hämtar alla produkter
app.get('/categories', async (req, res) => {
  try {
    const dBdata = await CategoryModel.find();
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
    const dBdata = await CustomerModel.find();
    res.json(dBdata);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//const addProduct = mongoose.model('addProduct', minimalSchema, 'Products');
app.post('/addproduct', async (req, res) => {

  if (Array.isArray(req.body.picture)) {

    if (Array.isArray(req.body.thumbnail)) {

        try {
          // Create a new user instance based on the request body
          const newProduct = new AddProducts({
            articleNumber: req.body.articleNumber,
            name: req.body.name,
            engName: req.body.engName,
            description: req.body.description,
            engDescription: req.body.engDescription,
            price: req.body.price,
            picture: req.body.picture,
            thumbnail: req.body.thumbnail,
            category: req.body.category,
            numberAvailable: req.body.numberAvailable,
          });

          // Save the user to the database
          await newProduct.save();

          res.status(201).json({ message: 'Product Data added successfully', user: newProduct });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }

      } //{ res.status(401).json({ message: 'Thumbnail is not an array. Add blocked.' }) }
}// else {   res.status(401).json({ message: 'Picture is not an array. Add blocked.' }) */ }

});

// #######################################################################################




//Spara kunder i databasen
app.post('/addCustomer', async (req, res) => {
  let data = CustomerData(req.body);
  const result = await data.save();
  res.send(result);
  });



//####### Save orders to the database code section ###########################
/*
const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: String,
  city: String,
  postCode: String
}); */

const addOrder = mongoose.model('Order', minimalSchema, 'OrderData');
app.post('/addOrder', async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    
    // Create a new user instance based on the request body
    const newOrder = new addOrder({
      shipping: req.body.shipping,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      postCode: req.body.postCode,
      totalCost: req.body.totalCost,
      payed: req.body.payed,  
      isDone: false,
      payMethod: req.body.payMethod, 
      products: req.body.products  
    });

    // Save the user to the database
    await newOrder.save();

    res.status(201).json({ message: 'OrderData added successfully', user: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// #######################################################################################







  app.get('/OrderData', async(req, res) => {
    try{
      const Orders = await OrderData.find();
      res.json(Orders)
    }catch (error){
      console.log(error)
      res.status(500).json({error: 'hittar inte'})
    } 
  })


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







// Uppdatera orders
app.post('/order/:orderId/update', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const update = req.body; 

    const updatedOrder = await OrderData.findByIdAndUpdate(orderId, update, {
      new: true, 
    });

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server error: ${error}`});
  }
});




// Uppdatera orders
app.post('/product/:productId/update', async (req, res) => {
  try {
    const productId = req.params.productId;
    const update = req.body; 

    const updatedProduct = await AddProducts.findByIdAndUpdate(productId, update, {
      new: true, 
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server error: ${error}`});
  }
});






