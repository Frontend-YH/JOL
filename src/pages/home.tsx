
import About from "../components/About.tsx";
import Footer from "../components/Footer.tsx";
import ProdCard from "../components/ProdCard.tsx";
import "../components/start-container.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Smallshop from "../components/ShopSmall.tsx";
import VideoReact from "../components/VideoReact.tsx";

function Home(props) {

  const [data, setData] = useState([]);
  const [infoText, setInfoText] = useState([{"info": [], "video": [{"name": "Spett", "url": "https://gardsjosmedja.com/spett.mp4"}]}]);

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


    /* Collect Information Texts from Backend Database */
    const getInfo = () => {
      fetch("http://localhost:3000/information")
        .then((res) => res.json())
        .then((data) => {      
          setInfoText(data.filter(entry => {
            return entry.type==="about";
          }))        
        })
        .catch((error) => {
          console.log(error);
          throw new Error("Kan inte hämta data");
        });
    };

    useEffect(() => {
      getData();
    }, []);

    useEffect(() => {
      getInfo();
      
    }, []);



    //flexbox container
    const flexContainer = {
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '50px', 
      width: "100%", 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: '30px',
    };



  

  return (
    <>
    <div className="start-container">
      <div className="start-text">
        {props.lang === "swe" ? (
          <>
            <h2>Välkommen till Gärdsjö Smedja</h2>
            <h3>Rättvik</h3>
            <h4>
              Vi tillverkar allt från yxor till ljuskronor.<br />Klicka dig in på vår butik &darr;
            </h4>
          </>
        ) : (
          <>
            <h2>Welcome to Gärdsjö Smedja</h2>
            <h3>Rättvik</h3>
            <h4>
            We craft everything from<br/>axes to chandeliers.<br/>Visit our store &darr;
            </h4>
          </>
        )}
      </div>

      <Button variant="contained" size="large" className="start-btn">
        {props.lang === "swe" ? "Till butiken" : "Go to store"}
      </Button>

    </div>

<About text={infoText} lang={props.lang}/>

<div style={flexContainer}>
{infoText[0].video.map((filename, index) => (
        <VideoReact index={index} video={filename.url} name={filename.name}/>
      ))}
</div>

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
