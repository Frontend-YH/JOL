import { Route, Routes } from "react-router-dom"
import Navigation from "./navigation.tsx"
import Home from "./pages/home.tsx"
import Admin from "./pages/adminPage.tsx"
import About from "./pages/about.tsx"
import Betala from "./pages/betala.tsx"
import Frakta from "./pages/frakt.tsx"
import Products from "./pages/products.tsx"
import Footer from "./Footer.tsx"
import ProdCard from "./components/ProdCard.tsx"


function App() {
  return (
    <>
    <Navigation />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/frakt" element={<Frakta />} />
            <Route path="/about" element={<About />} />
            <Route path="/betala" element={<Betala />} />
            <Route path="/products" element={<Products />} />
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
