import '../shopblock.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Använd bara Link här, inte CustomLink
import { Box, TextField } from '@mui/material';

function ShippingForm() {
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = () => {
    if (address.trim() !== '' && postalCode.trim() !== '' && city.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  return (
    <div id="Orderingpage">
      <div className="Register">
        <h1>Vänligen ange dina uppgifter</h1>
        <Box
          display="flex"
          flexDirection="column"
          width="400px"
          justifyContent="space-evenly"
          padding="5px"
        >
          <TextField
            required
            label="Adress"
            sx={{ bgcolor: 'white', borderRadius: '5px', marginTop: '35px' }}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              handleInputChange();
            }}
          ></TextField>
          <TextField
            type="number"
            required
            label="Postnummer"
            sx={{ bgcolor: 'white', borderRadius: '5px', marginTop: '35px' }}
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value);
              handleInputChange();
            }}
          ></TextField>
          <TextField
            required
            label="Ort"
            sx={{ bgcolor: 'white', borderRadius: '5px', marginTop: '35px', marginBottom: '127px' }}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              handleInputChange();
            }}
          ></TextField>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Button
            component={Link} // Använd Link här istället för CustomLink
            to="/CustomerRegister"
            variant="contained"
            size="small"
            sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}
          >
            Tillbaka
          </Button>
          <Button
            component={Link} // Använd Link här istället för CustomLink
            to="/Payment"
            variant="contained"
            size="small"
            sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}
            disabled={!formValid}
          >
            Nästa
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default ShippingForm;
