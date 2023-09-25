import { Route, Routes } from "react-router-dom"
import Navigation from "./navigation.tsx"
import Home from "./pages/home.tsx"
import Admin from "./pages/adminPage.tsx"
import ShopContainer from "./pages/shop.tsx"
import ShippingForm from "./components/Shipping.tsx"
import CustomerRegister from "./components/CustomerReg.tsx"
import PaymentForm from "./components/Payment.tsx"
import CheckoutContainer from "./pages/checkout.tsx"
import OrdersContainer from "./pages/orders.tsx"
import ProductsContainer from "./pages/product.tsx"
import AdminEditProduct from "./admin/EditProduct.tsx"
import AdminAddProduct from "./admin/AddProduct.tsx"
import AdminOrders from "./admin/Order.tsx"
import About from "./components/About.tsx"

import { useState, useEffect } from "react";


/* import images from "./assets/Images/images.ts";
import ImageCarousel from "./components/ImageCarousel.tsx"; */
function App() {

  /* ### Switch between eng and swe ######################################### */
  const language = localStorage.getItem("language") || "swe";
  const [lang, setLang] = useState(language);

    // Create a useEffect that updates localStorage so that the chosen
    // language remains even if the user refreshed the browser
    useEffect(() => {
      // Update the localStorage value with the current 'lang'
      localStorage.setItem("language", lang);
    }, [lang]); // The effect will run whenever the 'lang' useState changes
  /* ######################################################################## */

  return (
    <>
    <Navigation lang={lang} setLang={setLang}/>
            <Routes>
            <Route path="/" element={<Home lang={lang}/>} />
            <Route path="/about" element={<About lang={lang}/>} />
            <Route path="/adminPage" element={<Admin />} />
            <Route path="/orders" element={<OrdersContainer />} />
            <Route path= "/Payment" element={<PaymentForm/>}/>
            <Route path= "/Shipping" element={<ShippingForm/>}/>
            <Route path= "/CustomerRegister" element={<CustomerRegister/>}/>
            <Route path="/shop" element={<ShopContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/butik" element={<ProductsContainer />} />
            <Route path="/admin/editproduct" element={<AdminEditProduct />} />
            <Route path="/admin/Addproduct" element={<AdminAddProduct />} />
            <Route path="/admin/Orders" element={<AdminOrders />} />
           
            </Routes>
            {/* <ImageCarousel images={images} /> */}
      </>
  )
}

export default App;
