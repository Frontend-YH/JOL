import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

function PhoneNumberTextField() {
  // Initialize state for the phone number
  const [phoneNumber, setPhoneNumber] = useState('');

  // Load the phone number from localStorage on component mount
  useEffect(() => {
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    if (savedPhoneNumber !== null) {
      setPhoneNumber(savedPhoneNumber);
    }
  }, []);


  return (
    <>
    <TextField
      label='Mobilnummer'
      type='number'
      sx={{ bgcolor: 'white', borderRadius: '5px' }}
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
    </>
  );
}

export default PhoneNumberTextField;