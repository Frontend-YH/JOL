import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import "./popover.css"

export default function MenuPopper() {
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
       Kategorier
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <Button variant="contained" size="medium"id="All-Products">Alla kategorier</Button>
            <Button variant="contained" size="medium"id="All-Products2">Redskap</Button>
            <Button variant="contained" size="medium"id="All-Products2">Till dörren</Button>
            <Button variant="contained" size="medium"id="All-Products2">Ljustakar ljuskronor belysning</Button>
            <Button variant="contained" size="medium"id="All-Products2">Inredning</Button>
            <Button variant="contained" size="medium"id="All-Products2">Övrigt</Button>
            <Button variant="contained" size="medium"id="All-Products2">Grindar och räcken</Button>
            <Button variant="contained" size="medium"id="All-Products2">Gravkors</Button>
            <Button variant="contained" size="medium"id="All-Products2">Till spisar</Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}