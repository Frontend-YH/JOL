import { useEffect, useState } from "react";
import Footer from "../components/Footer.tsx";
import Smallshop from "../components/ShopSmall.tsx";
import ProdCard from "../components/ProdCard.tsx";

function ProductsContainer() {

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

    </> );
}

export default ProductsContainer;