import About from "../components/About.tsx";
import Footer from "../components/Footer.tsx";
import "../components/start-container.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import VideoReact from "../components/VideoReact.tsx";

function Home(props) {


  const [infoText, setInfoText] = useState([{"info": [], "video": [{"name": "Spett", "url": "https://gardsjosmedja.com/spett.mp4"}]}]);


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
          
          throw new Error("Kan inte hämta data");
        });
    };

 

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

      <Link to="/butik"><Button variant="contained" size="large" className="start-btn">
        {props.lang === "swe" ? "Till butiken" : "Go to store"}
      </Button></Link>

    </div>

<About text={infoText} lang={props.lang}/>

<div style={flexContainer}>
{infoText[0].video.map((filename, index) => (
        <VideoReact index={index} video={filename.url} name={filename.name}/>
      ))}
</div>
      <Footer />
    </>
  );
}

export default Home;
