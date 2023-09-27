import { useEffect, useState } from "react";
import Footer from "../components/Footer.tsx";
import Smallshop from "../components/ShopSmall.tsx";
import ProdCard from "../components/ProdCard.tsx";

import { useContext } from "react";
import { CartContext } from "../CartContext.tsx"



function ProductsContainer() {

  const { lang } = useContext(CartContext); // swe or eng picked?
    const [data, setData] = useState([]);

  /* Collect Product Data from Backend Database */
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


    return ( <>

<Smallshop/>
      <div className="products-div">
        {data.map((dataItem) => (
          <ProdCard
            key={dataItem._id}
            lang={lang}
            id={dataItem._id}
            name={lang === "swe" ? dataItem.name : dataItem.engName} // English if english have been picked
            price={parseInt(dataItem.price)}
            description={lang === "swe" ? dataItem.description : dataItem.engDescription} // English if english is picked
            thumbnailUrls={(dataItem.thumbnail || []).filter(Boolean)
              .map(
                (thumbnail) => `https://gardsjosmedja.com/products/${thumbnail}`
              )}
            imgUrls={(dataItem.picture || [])
              .filter(Boolean)
              .map(
                (picture) => `https://gardsjosmedja.com/products/${picture}`
              )}
          />
        ))}
      </div>

      <Footer />

    </> );
}

export default ProductsContainer;