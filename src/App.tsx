import { Route, Routes } from "react-router-dom"
import Navigation from "./navigation.tsx"
import Home from "./pages/home.tsx"
import Admin from "./pages/adminPage.tsx"
import Footer from "./Footer.tsx"
import ProdCard from "./components/ProdCard.tsx"
import ShopContainer from "./pages/shop.tsx"
import CheckoutContainer from "./pages/checkout.tsx"
import OrdersContainer from "./pages/orders.tsx"
import ProductsContainer from "./pages/product.tsx"
import AdminEditProduct from "./admin/EditProduct.tsx"
import AdminAddProduct from "./admin/AddProduct.tsx"
import AdminOrders from "./admin/Order.tsx"


function App() {
  return (
    <>
    <Navigation />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminPage" element={<Admin />} />
            <Route path="/orders" element={<OrdersContainer />} />
            <Route path="/shop" element={<ShopContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/product" element={<ProductsContainer />} />
            <Route path="/admin/editproduct" element={<AdminEditProduct />} />
            <Route path="/admin/Addproduct" element={<AdminAddProduct />} />
            <Route path="/admin/Orders" element={<AdminOrders />} />
            </Routes>
            <div className="products-div">
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            </div>
           
            <Footer/>
      </>
  )
}

export default App;
