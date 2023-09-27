import React, { useContext, useState } from 'react';
import { CartContext } from "../CartContext";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './prodcard.css';

export default function ProdCard(props) {
    const { addToCart } = useContext(CartContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div className="prod-card" onClick={openPopup}>
                <Card sx={{ padding: 2, marginBottom: 2 }}>
                    <img style={{ borderRadius: "6px" }} src={props.imgUrls[0]} alt={props.name} />
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
                        <Button variant="contained" onClick={() => addToCart(props)}>
                            {props.lang === "swe" ? (
                                <>Lägg till i kundvagn</>
                            ) : (
                                <>Add to cart</>
                            )}
                        </Button>
                    </div>
                </Card>
            </div>

            {isPopupOpen && (
                <div className="product-popup">
                    {
<>
<img style={{ borderRadius: "6px" }} src={props.imgUrls[0]} alt={props.name} />
<CardContent>
    <Typography gutterBottom variant="h5" component="div">
        {props.name}
    </Typography>
    <h4 className="price">{props.price}:-</h4>
    <Typography variant="body2" color="text.secondary">
        {props.description}
    </Typography>
</CardContent>
<Button variant="contained" onClick={() => addToCart(props)}>
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
                        <Button onClick={closePopup}>Stäng</Button>
                    </Card>
                </div>
            )}
        </>
    );
}
