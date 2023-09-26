import '../shopblock.css';
import { useContext } from "react";
import { CartContext } from "../CartContext";
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
import { Box } from '@mui/material';
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

function CheckoutContainer() {

    const { cart } = useContext(CartContext);

    return ( 
<div id= 'Orderingpage'>
    <Box className= 'Register'>
        <Box
                display="flex"
            flexDirection="column"
            alignItems="center"
            bgcolor="white"
            marginBottom="20px"
            paddingTop="20px"
            paddingBottom="20px"
            borderRadius="15px"
            >
        <Box className ="checkout">
            <h1>Din Beställning</h1>
            <p>Bekräfta att alla dina uppgifter samt order stämmer.</p>
        </Box>
        <Box className="orderInfo"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <li id='merch' className='orderLi'
            >
                <p>Varor</p>
            </li>
            <li id='adress'className='orderLi'>
                <p>adress</p>
            </li>
            <li id='shipping'className='orderLi'>
                <p>Frakt</p>
            </li>
            <div id="kostnad"className='orderLi'>
                <p>Total kostnad</p>
            </div>


        </Box>

        <Box
            display="flex"
            flexDirection="row"
        >
            <Button component={CustomLink} to="/Payment"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin:'10px'}}>Tillbaka</Button>
            <Button component={CustomLink} to="/"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin: '10px'}}>Beställ</Button>
        </Box>
        </Box> 
        </Box>
</div>);
}

export default CheckoutContainer;