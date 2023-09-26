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

function CustomerRegister() {
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") || "",
    lastName: localStorage.getItem("lastName") || "",
    phoneNumber: localStorage.getItem("phoneNumber") || "",
    email: localStorage.getItem("email") || "",
  });

  const [formValid, setFormValid] = useState(false); // State för att hålla koll på om formuläret är giltigt

  // Define a generic event handler for text fields
  const handleTextFieldChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    localStorage.setItem(fieldName, value);
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("firstName", formData.firstName);
    localStorage.setItem("lastName", formData.lastName);
    localStorage.setItem("phoneNumber", formData.phoneNumber);
    localStorage.setItem("email", formData.email);
  };

  useEffect(() => {
    // Initialize form data with values from localStorage on component mount
    setFormData((prevData) => ({
      ...prevData,
      firstName: localStorage.getItem("firstName") || "",
      lastName: localStorage.getItem("lastName") || "",
      phoneNumber: localStorage.getItem("phoneNumber") || "",
      email: localStorage.getItem("email") || "",
    }));
  }, []);

  // Funktion för att kontrollera om formuläret är giltigt
  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.phoneNumber.trim() !== '' &&
      formData.email.trim() !== ''
    );
  };

 
  useEffect(() => {
    setFormValid(isFormValid());
  }, [formData, isFormValid]);

  return (
    <div id="Orderingpage">
      <div className='Register'>
        <h1>Vänligen ange dina uppgifter</h1>
        <Box
          display="flex"
          flexDirection="column"
          height="400px"
          width="400px"
          justifyContent="space-evenly"
          padding="5px"
        >
          <TextField
            label="Förnamn"
            sx={{ bgcolor: 'white', borderRadius: "5px" }}
            value={formData.firstName}
            onChange={(e) => handleTextFieldChange("firstName", e.target.value)}
          ></TextField>
          <TextField
            label="Efternamn"
            sx={{ bgcolor: 'white', borderRadius: "5px" }}
            value={formData.lastName}
            onChange={(e) => handleTextFieldChange("lastName", e.target.value)}
          ></TextField>
          <TextField
            label="Telefonnummer"
            sx={{ bgcolor: 'white', borderRadius: "5px" }}
            value={formData.phoneNumber}
            onChange={(e) => handleTextFieldChange("phoneNumber", e.target.value)}
          ></TextField>
          <TextField
            label="E-mail"
            sx={{ bgcolor: 'white', borderRadius: "5px" }}
            value={formData.email}
            onChange={(e) => handleTextFieldChange("email", e.target.value)}
          ></TextField>
        </Box>
        <Button onClick={handleSaveToLocalStorage} variant="contained" size="small" sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}>Spara</Button>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Button variant="contained" size="small" sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }} disabled={true} >Tillbaka</Button>
          <Button
            component={CustomLink}
            to="/Shipping"
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

export default CustomerRegister;
