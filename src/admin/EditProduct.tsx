import { useEffect, useState } from "react";
import Footer from "../components/Footer.tsx";
import ShopHeader from "../components/ShopHeader.tsx";
import ProdCard from "../components/ProdCard.tsx";

import { useContext } from "react";
import { CartContext } from "../CartContext.tsx"



function ProductsContainer() {

  const { lang, category } = useContext(CartContext); // swe or eng picked?
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

<ShopHeader admin={true}/>
      <div className="products-div">
        {data.filter((dataItem) => {

        // Visa bara den kategori av produkter som valts i menyn
        if (category==="all" || category==="alla") {
          return true;
        } else {
          return dataItem.category===category;
        }

        }).map((dataItem) => (
          <ProdCard
            admin={true}
            callback={getData}
            key={dataItem._id}
            lang={lang}
            id={dataItem._id}
            name={lang === "swe" ? dataItem.name : dataItem.engName} // English if english have been picked
            price={dataItem.price} // OBS: har haft parseInt(dataItem.price) här tidigare. Ev. ERROR pga byte?
            description={lang === "swe" ? dataItem.description : dataItem.engDescription} // English if english is picked
            thumbnailUrls={(dataItem.thumbnail || []).filter(Boolean)
              .map(
                (thumbnail) => { 
                  
                  
                  // Om databas-array strängen innehåller ordet http så tas hela URLen med
                  // Om databas-array strängen INTE INNEHÅLLER http så läggs default url-pathen till.
                  if (thumbnail.includes("http")) {
                     
                    return thumbnail;
                  } else {
                    // default url path läggs till
                    return `https://gardsjosmedja.com/products/${thumbnail}`; 
                  } 
              
              }
              )}
            imgUrls={(dataItem.picture || [])
              .filter(Boolean)
              .map(
                (picture) => { 
                  
                  
                  // Om databas-array strängen innehåller ordet http så tas hela URLen med
                  // Om databas-array strängen INTE INNEHÅLLER http så läggs default url-pathen till.
                  if (picture.includes("http")) {
                     
                    return picture;
                  } else {
                    // default url path läggs till
                    return `https://gardsjosmedja.com/products/${picture}`; 
                  } 
              
              }
              )}
          />
        ))}
      </div>

      <Footer />

    </> );
}

export default ProductsContainer;