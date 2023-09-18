import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './prodcard.css';

export default function ProdCard() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="prod-card">
        <Card sx={{padding:2, marginBottom:2}}> 
        <CardMedia
          component="img"
          image="http://paim.net/gardsjosmedja.se/imgs/293_5715_Plattfatter.jpg"
          alt="example"
        />
         <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Ljusstake
          </Typography>
          <h4 className="price">2999:-</h4>
          <Typography variant="body2" color="text.secondary">
          beskrivning Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmodbeskrivning Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmodbeskrivning Lorem ipsum dolor sit amet,
          consectetur adipiscing...
          </Typography>
        </CardContent>
        <div className="btn-quantity">
        <FormControl sx={{ m: 0.5, minWidth: 80 , height: 60}}>
          <InputLabel id="simple-select-autowidth-label">Antal</InputLabel>
          <Select
            labelId="simple-select-autowidth-label"
            id="simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="1"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Lägg till i kundvagn</Button>
        </div>
        </Card>
      </div>
    </>
  );
}
