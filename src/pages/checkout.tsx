import '../shopblock.css';
//Fuckar upp hela sidan
//import OrderPost from './Orderpost'
import { useContext } from "react";
import { CartContext } from "../CartContext";
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
import { Box, Checkbox, TextField } from '@mui/material';
import OrderButton from './Orderpost'; // Import the OrderButton component


function DeliveryInfo() {
    // Retrieve boolean values from localStorage
    const postnordChecked = localStorage.getItem('postnord') === 'true';
    const dhlChecked = localStorage.getItem('dhl') === 'true';
    const dbSchenkerChecked = localStorage.getItem('dbSchenker') === 'true';
    return (
      <div>
        {postnordChecked && <p>Postnord. 5 dagar.</p>}
        {dhlChecked && <p>DHL. 3 dagar.</p>}
        {dbSchenkerChecked && <p>DBSchenker. 3 dagar.</p>}
      </div>
    );
  }
  

function UserInfo() {
  // Retrieve values from localStorage
  const firstName = localStorage.getItem('firstName') || '';
  const lastName = localStorage.getItem('lastName') || '';
  const address = localStorage.getItem('address') || '';
  const postalCode = localStorage.getItem('postalCode') || '';
  const city = localStorage.getItem('city') || '';
 
  

  return (
    <div>
      <p>{firstName}  {lastName}</p>
      <p>{address}</p>
      <p>{postalCode}  {city}.</p>
    </div>
  );
}


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
    const names = cart.map((item) => item.name);
    const price = cart.map((item) => item.price);
    const id = cart.map((item) => item.id);
    console.log(price);
    
    const TotalPrice = () => {
        let total = 0;
        cart.forEach((product) => {
          const subtotal = product.price * product.quantity;
          total += subtotal;
        });
        const shippingCost = localStorage.getItem('shippingcost');
        const shippingCostAsNumber = parseInt(shippingCost, 10);

        let totalAndShipping = total + shippingCostAsNumber;
        const moms = total / 4;
        localStorage.setItem('totalCost', totalAndShipping)
        return <p>{totalAndShipping} kr, varav {moms} kr, är moms.</p>;
      };
    

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
                <p>Varor:</p>
                <div className="name-list">
                    {names.map((name, index) => (
                <p key={index} className="name">{name}</p>
                ))}
            </div>
            </li>
            <li id='adress'className='orderLi'>
                <p>Adress:</p>
                <UserInfo/>
            </li>
            <li id='shipping'className='orderLi'>
                <p>Frakt</p>
                <DeliveryInfo/>
            </li>
            <div id="kostnad"className='orderLi'>
                <p>Total kostnad</p>
                <TotalPrice/>
            </div>


        </Box>

        <Box
            display="flex"
            flexDirection="row"
        >
            <OrderButton/>
            <Button component={CustomLink} to="/Payment"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin:'10px'}}>Tillbaka</Button>
            <Button component={CustomLink} to="/"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin: '10px'}}>Beställ</Button>
        </Box>
        </Box> 
        </Box>
</div>);
}

export default CheckoutContainer;