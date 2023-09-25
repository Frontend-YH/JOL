import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ReactNode } from 'react';
import { Box, Checkbox, TextField } from '@mui/material';
import Swish from './pics/Swish.png';
import kort from './pics/kort.png';
import postnord from './pics/postnord.png';
import DHL from './pics/DHL.jpg';
import DBS from './pics/DBS.jpg';

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function PaymentForm() {
  // Initialize state for the text field values and checkboxes
  const [telefonnummer, setTelefonnummer] = useState('');
  const [kortnummer, setKortnummer] = useState('');
  const [datum, setDatum] = useState('');
  const [cvv, setCvv] = useState('');
  const [swishChecked, setSwishChecked] = useState(false);
  const [kortChecked, setKortChecked] = useState(false);
  const [postnordChecked, setPostnordChecked] = useState(false);
  const [dhlChecked, setDhlChecked] = useState(false);
  const [dbSchenkerChecked, setDbSchenkerChecked] = useState(false);

  // Define unique IDs for each checkbox (as shown in previous code)
  const swishId = 'swish';
  const kortId = 'kort';
  const postnordId = 'postnord';
  const dhlId = 'dhl';
  const dbSchenkerId = 'dbSchenker';

  // Load text field values and checkbox states from localStorage on component mount
  useEffect(() => {
    const savedTelefonnummer = localStorage.getItem('telefonnummer');
    if (savedTelefonnummer !== null) {
      setTelefonnummer(savedTelefonnummer);
    }

    const savedKortnummer = localStorage.getItem('kortnummer');
    if (savedKortnummer !== null) {
      setKortnummer(savedKortnummer);
    }

    const savedDatum = localStorage.getItem('datum');
    if (savedDatum !== null) {
      setDatum(savedDatum);
    }

    const savedCvv = localStorage.getItem('cvv');
    if (savedCvv !== null) {
      setCvv(savedCvv);
    }

    const savedSwishChecked = localStorage.getItem(swishId);
    if (savedSwishChecked !== null) {
      setSwishChecked(savedSwishChecked === 'true');
    }

    const savedKortChecked = localStorage.getItem(kortId);
    if (savedKortChecked !== null) {
      setKortChecked(savedKortChecked === 'true');
    }

    const savedPostnordChecked = localStorage.getItem(postnordId);
    if (savedPostnordChecked !== null) {
      setPostnordChecked(savedPostnordChecked === 'true');
    }

    const savedDhlChecked = localStorage.getItem(dhlId);
    if (savedDhlChecked !== null) {
      setDhlChecked(savedDhlChecked === 'true');
    }

    const savedDbSchenkerChecked = localStorage.getItem(dbSchenkerId);
    if (savedDbSchenkerChecked !== null) {
      setDbSchenkerChecked(savedDbSchenkerChecked === 'true');
    }
  }, []);

  // Save text field values and checkbox states to localStorage when they change
  useEffect(() => {
    localStorage.setItem('telefonnummer', telefonnummer);
  }, [telefonnummer]);

  useEffect(() => {
    localStorage.setItem('kortnummer', kortnummer);
  }, [kortnummer]);

  useEffect(() => {
    localStorage.setItem('datum', datum);
  }, [datum]);

  useEffect(() => {
    localStorage.setItem('cvv', cvv);
  }, [cvv]);

  useEffect(() => {
    localStorage.setItem(swishId, swishChecked.toString());
  }, [swishChecked]);

  useEffect(() => {
    localStorage.setItem(kortId, kortChecked.toString());
  }, [kortChecked]);

  useEffect(() => {
    localStorage.setItem(postnordId, postnordChecked.toString());
  }, [postnordChecked]);

  useEffect(() => {
    localStorage.setItem(dhlId, dhlChecked.toString());
  }, [dhlChecked]);

  useEffect(() => {
    localStorage.setItem(dbSchenkerId, dbSchenkerChecked.toString());
  }, [dbSchenkerChecked]);

  return (
    <div id='Orderingpage'>
      <div className='Register'>
        <Box
          display='flex'
          flexDirection='column-reverse'
          width='400px'
          justifyContent='space-evenly'
          alignContent='center'
          padding='5px'
        >
          <Box
            bgcolor='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            marginTop='20px'
            paddingTop='20px'
            paddingBottom='20px'
            borderRadius='15px'
          >
            <h1>Betalning</h1>
            <Box id={swishId}>
              <img
                src={Swish}
                alt='Swish'
                width='60'
                height='70px'
              />
              <Checkbox
                classes={{ root: 'custom-checkbox-root' }}
                checked={swishChecked}
                onChange={(e) => setSwishChecked(e.target.checked)}
              ></Checkbox>
              <TextField
                label='Telefonnummer'
                sx={{ bgcolor: 'white', borderRadius: '5px' }}
                value={telefonnummer}
                onChange={(e) => setTelefonnummer(e.target.value)}
              ></TextField>
            </Box>
            <Box id={kortId} display='flex' flexDirection='row'>
              <img
                src={kort}
                alt='kort'
                width='60'
                height='70px'
              />
              <Checkbox
                classes={{ root: 'custom-checkbox-root' }}
                checked={kortChecked}
                onChange={(e) => setKortChecked(e.target.checked)}
              ></Checkbox>
              <Box className='CardInput' display='flex' flexDirection='column'>
                <TextField
                  label='Kortnummer'
                  sx={{ bgcolor: 'white', borderRadius: '5px' }}
                  value={kortnummer}
                  onChange={(e) => setKortnummer(e.target.value)}
                ></TextField>
                <TextField
                  label='Datum'
                  sx={{ bgcolor: 'white', borderRadius: '5px' }}
                  value={datum}
                  onChange={(e) => setDatum(e.target.value)}
                ></TextField>
                <TextField
                  label='CVV'
                  sx={{ bgcolor: 'white', borderRadius: '5px' }}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                ></TextField>
              </Box>
            </Box>
          </Box>
          <Box
            id='leverans'
            display='flex'
            flexDirection='column'
            bgcolor='white'
            borderRadius='15px'
            paddingBottom='15px'
          >
            <h1>Leverans</h1>
            <Box id={postnordId} display='flex' flexDirection='row' margin='10px'>
              <Box className='imgBlock'>
                <img
                  src={postnord}
                  alt='postnord'
                  width='160'
                  height='120px'
                />
                <p>49:- , 5 dagars leveranstid</p>
                <p>Levererar till ombud</p>
              </Box>
              <Checkbox
                classes={{ root: 'custom-checkbox-root' }}
                checked={postnordChecked}
                onChange={(e) => setPostnordChecked(e.target.checked)}
              ></Checkbox>
            </Box>
            <Box id={dhlId} display='flex' flexDirection='row' margin='10px'>
              <Box className='imgBlock'>
                <img
                  src={DHL}
                  alt='DHL'
                  width='160'
                  height='60px'
                />
                <p>99:- , 3 dagars leveranstid</p>
                <p>Levererar till dörren</p>
              </Box>
              <Checkbox
                classes={{ root: 'custom-checkbox-root' }}
                checked={dhlChecked}
                onChange={(e) => setDhlChecked(e.target.checked)}
              ></Checkbox>
            </Box>
            <Box
              id={dbSchenkerId}
              display='flex'
              flexDirection='row'
              margin='10px'
            >
              <Box className='imgBlock'>
                <img
                  src={DBS}
                  alt='DB-SCHENKER'
                  width='160'
                  height='60px'
                />
                <p>79:- , 3 dagars leveranstid</p>
                <p>Levererar till ombud</p>
              </Box>
              <Checkbox
                classes={{ root: 'custom-checkbox-root' }}
                checked={dbSchenkerChecked}
                onChange={(e) => setDbSchenkerChecked(e.target.checked)}
              ></Checkbox>
            </Box>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
        >
          <Button
            component={CustomLink}
            to='/Shipping'
            variant='contained'
            size='small'
            sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}
          >
            Tillbaka
          </Button>
          <Button
            component={CustomLink}
            to='/checkout'
            variant='contained'
            size='small'
            sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}
          >
            Nästa
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default PaymentForm;