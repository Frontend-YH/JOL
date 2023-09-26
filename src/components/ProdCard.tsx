import React, { useContext  } from 'react';
import { CartContext } from "../CartContext";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import './prodcard.css';

/*
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select"; 
*/


/*
interface ProdCardProps {
    imgUrls: string[];
    name: string;
    price: string;
    description: string;
    id: string;
    key: string;
}
*/


export default function ProdCard(props) {

    
    const { addToCart } = useContext(CartContext);


return (
<>
<div className="prod-card">
<Card sx={{ padding: 2, marginBottom: 2 }}>
    <img style={{borderRadius: "6px"}} src={props.imgUrls[0]}/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{props.name}
</Typography>
<h4 className="price">{props.price}</h4>
<Typography variant="body2" color="text.secondary">
{props.description}
</Typography>
</CardContent>
<div className="btn-quantity">

<Button variant="contained" onClick={() => addToCart(props)}>Lägg till i kundvagn</Button>
</div>
</Card>
</div>


</>
);
}

/*

// OM VI VILL HA ANTAL FÄLT
<FormControl sx={{ m: 0.5, minWidth: 80, height: 60 }}>
<InputLabel id="simple-select-autowidth-label">Antal</InputLabel>
<Select
labelId="simple-select-autowidth-label"
id="simple-select-autowidth"
autoWidth
label={props.id}
>
<MenuItem>1</MenuItem>
<MenuItem>2</MenuItem>
<MenuItem>3</MenuItem>
</Select>
</FormControl>

*/
