import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import "./popover.css"

import { useContext } from "react";
import { CartContext } from "../CartContext.tsx"



export default function MenuPopper() {

  const { lang } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div className='product-categories'>
      <Button variant="outlined" aria-describedby={id} type="button" onClick={handleClick}>
      {lang==="swe" ? "Kategorier" : "Categories"}
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <Button variant="contained" size="medium"id="All-Products">{lang==="swe" ? "Alla kategorier" : "All categories"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Redskap" : "Tools"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Till dörren" : "For the door"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Ljustakar ljuskronor belysning" : "Candlestick holders, chandeliers and lighting"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Inredning" : "Interior"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Övrigt" : "Other"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Grindar och räcken" : "Gates and railings"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Gravkors" : "Monumental cross markers"}</Button>
            <Button variant="contained" size="medium"id="All-Products2">{lang==="swe" ? "Till spisar" : "For stoves"}</Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}