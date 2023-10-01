import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import "./popover.css"

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext.tsx"



export default function MenuPopper() {

  const { lang, category, setCategory, categories } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [categoryName, setCategoryName] = useState("all");

  

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const menuClickHandler = (e) => {
    setCategory(e.target.name);
    setOpen((previousOpen) => !previousOpen);
    setCategoryName(e.target.value);
  }

  useEffect(() => {
    setCategoryName("all");
    setCategory("all");
  }, [lang, setCategory]);
  

  return (
    <div className='product-categories'>
      <Button variant="outlined" aria-describedby={id} type="button" onClick={handleClick}>
      {lang==="swe" ? "Kategori: " + categoryName : "Category: " + categoryName}
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <Button variant="contained" size="medium"id="All-Products" name="all" value={lang==="swe" ? "Alla" : "All"} onClick={menuClickHandler}>{lang==="swe" ? "Alla kategorier" : "All categories"}</Button>
            {categories.map((catItem) => (  
            <Button key={catItem.id} variant="contained" size="medium"id="All-Products2" name={catItem.category} value={lang==="swe" ? catItem.name : catItem.engName} onClick={menuClickHandler}>{lang==="swe" ? catItem.name : catItem.engName}</Button>
            ))}
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}