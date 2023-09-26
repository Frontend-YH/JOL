import React, { useState, useEffect } from "react";
import '../shopblock.css';
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
import { Box, TextField } from '@mui/material';

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function ShippingForm() {
  const [formData, setFormData] = useState({
    address: localStorage.getItem("address") || "",
    postalCode: localStorage.getItem("postalCode") || "",
    city: localStorage.getItem("city") || "",
  });

  const [formValid, setFormValid] = useState(false); // State för att hålla koll på om formuläret är giltigt

  const handleTextFieldChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    localStorage.setItem(fieldName, value);
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("address", formData.address);
    localStorage.setItem("postalCode", formData.postalCode);
    localStorage.setItem("city", formData.city);
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      address: localStorage.getItem("address") || "",
      postalCode: localStorage.getItem("postalCode") || "",
      city: localStorage.getItem("city") || "",
    }));
  }, []);

  // Funktion för att kontrollera om formuläret är giltigt
  const isFormValid = () => {
    return (
      formData.address.trim() !== '' &&
      formData.postalCode.trim() !== '' &&
      formData.city.trim() !== ''
    );
  };

  // Uppdatera formValid-state när formuläret ändras
  useEffect(() => {
    setFormValid(isFormValid());
  }, [formData]);

  return (
    <div id="Orderingpage">
      <div className='Register'>
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
            sx={{ bgcolor: 'white', borderRadius: "5px", marginTop: "35px" }}
            value={formData.address}
            onChange={(e) => handleTextFieldChange("address", e.target.value)}
          ></TextField>
          <TextField
          required
            label="Postnummer"
            type="number"
            sx={{ bgcolor: 'white', borderRadius: "5px", marginTop: "35px" }}
            value={formData.postalCode}
            onChange={(e) => handleTextFieldChange("postalCode", e.target.value)}
          ></TextField>
          <TextField
          required
            label="Ort"
            sx={{ bgcolor: 'white', borderRadius: "5px", marginTop: "35px", marginBottom: "127px" }}
            value={formData.city}
            onChange={(e) => handleTextFieldChange("city", e.target.value)}
          ></TextField>
        </Box>
        <Button onClick={handleSaveToLocalStorage} variant="contained" size="small" sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}>Spara</Button>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Button component={CustomLink} to="/CustomerRegister" variant="contained" size="small" sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}>Tillbaka</Button>
          <Button
            component={CustomLink}
            to="/Payment"
            variant="contained"
            size="small"
            sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}
            disabled={!formValid} // Inaktivera knappen om formuläret inte är giltigt
          >
            Nästa
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default ShippingForm;
