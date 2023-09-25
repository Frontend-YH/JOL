import '../shopblock.css';
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
import { Box , TextField} from '@mui/material';


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

function CustomerRegister() {
    return ( <div id= 'Orderingpage'>
        <div className='Register'>
            <h1>Vänligen ange dina uppgifter</h1>
            <Box
            display = "flex"
            flexDirection= "column"
            height="400px"
            width="400px"
            justifyContent="space-evenly"
            padding="5px"
            >
                <TextField
                label = "Förnamn"
                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                ></TextField>
                <TextField
                label = "Efternamn" 
                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                ></TextField>               
                <TextField
                label = "Telefonnummer" 
                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                ></TextField>                
                <TextField
                label = "E-mail" 
                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                ></TextField>
            </Box>
<Box
            display = "flex"
            flexDirection= "row"
            justifyContent="center"
            >
<Button variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin:'10px'}}>Tillbaka</Button>
<Button component={CustomLink} to="/Shipping"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin: '10px'}}>Nästa</Button>
</Box>
    </div>
    </div> );
}


export default CustomerRegister;