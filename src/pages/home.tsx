import About from "../components/About.tsx"
import Footer from "../components/Footer.tsx"
import ProdCard from "../components/ProdCard.tsx"
import "../components/start-container.css"
import Button from '@mui/material/Button';
function Home() {
    return ( <>
    <div className="start-container">
        <div className="start-text">
        <h2>Välkommen till Gärdsjösmedja</h2>
        <h4>Vi tillverkar allt från krokar till ljusstakar. Klicka dig in på våran butik</h4>
        </div>
        <Button variant="contained" size="large"className="start-btn">Till butiken</Button>
</div>
    <About/> 
            <div className="products-div">
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            </div>

            <Footer/>
    </> );
}

export default Home;