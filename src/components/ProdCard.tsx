import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import './prodcard.css';
//import SwipeableTextMobileStepper from './ImageCarousel';


interface ProdCardProps {
imgUrls: string[];
name: string;
price: string;
description: string;
id: string;
}


export default function ProdCard(props: ProdCardProps) {
return (
<>
<div className="prod-card">
<Card sx={{ padding: 2, marginBottom: 2 }}>
<CardContent>
<Typography gutterBottom variant="h4" component="div">
{props.name}
</Typography>
<h4 className="price">{props.price}</h4>
<Typography variant="body2" color="text.secondary">
{props.description}
</Typography>
</CardContent>
<div className="btn-quantity">
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
<Button variant="contained">Lägg till i kundvagn</Button>
</div>
</Card>
</div>


</>
);
}
