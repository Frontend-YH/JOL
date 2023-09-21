
import About from "../components/About.tsx";
import Footer from "../components/Footer.tsx";
import ProdCard from "../components/ProdCard.tsx";
import "../components/start-container.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Smallshop from "../components/ShopSmall.tsx"


function Home() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Kan inte hämta data");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="start-container">
        <div className="start-text">
          <h2>Välkommen till Gärdsjö Smedja</h2>
          <h3>Rättvik</h3>
          <h4>
            Vi tillverkar allt från krokar till ljusstakar.<br/>Klicka dig in på
            våran butik.
          </h4>
        </div>

        <Button variant="contained" size="large" className="start-btn">
          Till butiken
        </Button>
      </div>
      <About />
<Smallshop/>
      <div className="products-div">
        {data.map((dataItem) => (
          <ProdCard
            key={dataItem._id}
            name={dataItem.name}
            price={dataItem.price + ":-"}
            description={dataItem.description}
            imgUrls={(dataItem.pictures || dataItem.picture || [])
              .filter(Boolean)
              .map(
                (picture) => `https://gardsjosmedja.com/products/${picture}`
              )}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;
