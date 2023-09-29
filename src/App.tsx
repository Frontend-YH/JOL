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
import EditProduct from "./admin/EditProduct.tsx"
import AdminAddProduct from "./admin/AddProduct.tsx"
import AdminOrders from "./admin/Order.tsx"
import About from "./components/About.tsx"

import { useContext } from "react";
import { CartContext } from "./CartContext.tsx"



function App() {

  const { lang, setLang } = useContext(CartContext);

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
            <Route path="/admin/editproduct" element={<EditProduct />} />
            <Route path="/admin/Addproduct" element={<AdminAddProduct />} />
            <Route path="/admin/Orders" element={<AdminOrders />} />
           
            </Routes>
           
      </>
  )
}

export default App;
