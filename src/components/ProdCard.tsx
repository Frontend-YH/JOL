import React, { useEffect, useContext, useState } from 'react';
import { CartContext } from "../CartContext";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './prodcard.css';

async function postData(toBackend, productId) {

    const response = await fetch(`http://localhost:3000/product/${productId}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toBackend),
    });

    if (!response.ok) {
      throw new Error('Failed response!');
    }

    const responseData = await response.json();
    return responseData;

}

export default function ProdCard(props) {
    const { addToCart } = useContext(CartContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [prodInputValue, setProdInputValue] = useState();

    const { callback } = props;

    console.log(props);


    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // ################### ADMIN SECTION ###############################################

    const openEditPopup = () => {
        setIsEditPopupOpen(true);
    };
    const closeEditPopup = () => {
        setIsEditPopupOpen(false);
    };
    const saveToProduct = async (productId) => {
        
    /*     const toBackend = {
            name: prodInputValue.name,
            price: prodInputValue.price,
          };  */
          
        
          try {
            const response = await postData(prodInputValue, productId);
            // Success response
            console.log('Data submitted successfully. Response:', response);
            //const tarr = [];
            //props.getData(tarr); 
            callback([]);
            closeEditPopup();
            

          } catch (error) {
            // Error response
            console.error('Data submission error:', error);
            alert(`Error: ${error}`);
          }
          
    };

    const handleProdInputChange = (e) => {
      
        const { name, value } = e.target;

        if(name==="imgUrls") { 
            const newName = "picture";
            setProdInputValue({
                ...prodInputValue,
                [newName]: [value],
              });        
         } else {
                setProdInputValue({
                  ...prodInputValue,
                  [name]: value,
                });
            }
      };
    


    // ##################################################################################

    // ################### SLIDER SECTION ###############################################
    // Change image every 4 seconds based on the imageUrls array
    useEffect(() => {
      const interval = setInterval(changeImage, 4000); 
      
      return () => {
        clearInterval(interval); 
      };
    }, []);
  
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.imgUrls.length);
    };
  
    const currentImage = props.imgUrls[currentImageIndex];
    // ####################################################################################

    const textAreaStyling = {
        height: "100px", 
        width: "220px", 
        padding: "10px", 
        border: "2px solid #ddd", 
        overflow: "scroll",
        borderRadius: "6px",
        margin: "0"
    }
    const inputTextStylingName = {
        height: "30px", 
        width: "142px", 
        padding: "10px", 
        border: "2px solid #ddd", 
        borderRadius: "6px",
        margin: "0"
    }

    const inputTextStylingPrice = {
        height: "30px", 
        width: "165px", 
        padding: "10px", 
        border: "2px solid #ddd", 
        borderRadius: "6px",
        margin: "0"
    }


    return (
        <>
            <div className="prod-card">
                <Card sx={{ padding: 8, paddingBottom: "10px", marginBottom: 2, margin: "0px" }}>
                    <img style={{ borderRadius: "6px", cursor: "pointer" }} src={props.imgUrls[0]} alt={props.name} onClick={openPopup} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <h4 className="price">{props.price}:-</h4>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                    <div className="btn-quantity">
                    {props.admin === false ? (

                                <Button variant="contained" onClick={() => addToCart(props)}>
                                {props.lang === "swe" ? (
                                    <>Lägg i kundvagn</>
                                ) : (
                                    <>Add to cart</>
                                )}
                                </Button>

                            ) : (

                                <Button variant="contained" onClick={openEditPopup} >
                                {props.lang === "swe" ? (
                                    <>Redigera produkt</>
                                ) : (
                                    <>Edit product</>
                                )}
                                </Button>

                            )}                       

                    </div>
                </Card>
            </div>

            {isPopupOpen && (
                <div className="product-popup">   
                    {
<>
<img style={{ borderRadius: "6px" }} src={currentImage} alt={props.name} />
<CardContent>
    <Typography gutterBottom variant="h5" component="div">
        {props.name}
    </Typography>
    <h4 className="price">{props.price}:-</h4>
    <Typography variant="body2" color="text.secondary">
        {props.description}
    </Typography>
</CardContent>
<Button size="large" style={{marginRight: "10px", width: "260px", padding: "12px"}} variant="contained" onClick={() => addToCart(props)}>
                            {props.lang === "swe" ? (
                                <>Lägg till i kundvagn</>
                            ) : (
                                <>Add to cart</>
                            )}
                        </Button>

</>

                    }
                    <Card>
                        {/* ... Produktdetaljer ... */}
                        <Button size="large" onClick={closePopup}>
                        {props.lang === "swe" ? (
                                <>Stäng</>
                            ) : (
                                <>Close</>
                            )}
                        </Button>
                    </Card>
                </div>
            )}
            
            {
            
// ############### ADMIN SECTION / Edit Product ###################################################

            isEditPopupOpen && (
                <div className="product-popup">
                    {
<>
<img style={{ borderRadius: "6px", maxHeight: "300px" }} src={currentImage} alt={props.name} />
<CardContent>
    
    <label htmlFor="name">Namn: </label><input type="text" style={inputTextStylingName} id="name" name="name" defaultValue={props.name} onChange={handleProdInputChange}/>

    <Typography gutterBottom variant="h6" component="div">
    <label htmlFor="price">Pris: </label><input type="text" style={inputTextStylingPrice} id="price" name="price" defaultValue={props.price} onChange={handleProdInputChange}/>
    </Typography>
    <Typography variant="h6" color="text.secondary">
    <label htmlFor="description">Beskrivning: <br/></label><textarea style={textAreaStyling} name="description" defaultValue={props.description} id="description" onChange={handleProdInputChange}/>
    </Typography>
    <Typography variant="h6" color="text.secondary">
    <label htmlFor="imgUrl">Bild-URL: <br/></label><textarea style={textAreaStyling} defaultValue={props.imgUrls[0]} name="imgUrls" id="imgUrl" onChange={handleProdInputChange}/>
    </Typography>
</CardContent>
<Button size="large" style={{marginRight: "10px", width: "260px", padding: "12px"}} variant="contained" onClick={() => saveToProduct(props.id)}>
                            {props.lang === "swe" ? (
                                <>Spara ändringar</>
                            ) : (
                                <>Save changes</>
                            )}
                        </Button>

</>

                    }
                    <Card>
                        {/* ... Produktdetaljer ... */}
                        <Button size="large" onClick={closeEditPopup}> 
                                {props.lang === "swe" ? (
                                <>Stäng</>
                            ) : (
                                <>Close</>
                            )}</Button>
                    </Card>
                </div>
            )}



        </>
    );
}
