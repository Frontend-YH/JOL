import '../shopblock.css';
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
import { Box, TextField } from '@mui/material';



interface CustomLinkProps{
    to: string;
    children: ReactNode;
}


function CustomLink({ to, children, ...props}: CustomLinkProps){
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
      );
}




function ShippingForm() {
    return ( <div id= 'Orderingpage'>
         <div className='Register'>
            <h1>Vänligen ange dina uppgifter</h1>
            <Box
            display = "flex"
            flexDirection= "column"
            width="400px"
            justifyContent="space-evenly"
            padding="5px"
            >
                <TextField
                label = "Adress"
                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                ></TextField>
                <TextField
                label = "Postnummer" 
                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                ></TextField>               
                <TextField
                label = "Ort" 
                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                ></TextField>              
            </Box>
<Box
            display = "flex"
            flexDirection= "row"
            justifyContent="center"
            >

<Button component={CustomLink} to="/CustomerRegister" variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin:'10px'}}>Tillbaka</Button>
<Button component={CustomLink} to="/Payment"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin: '10px'}}>Nästa</Button>
</Box>
    </div>
    </div> );
}

export default ShippingForm;