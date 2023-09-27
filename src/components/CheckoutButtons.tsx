import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../CartContext.tsx"



 

/*
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
*/

/*
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
*/



const CheckoutButtons = (props) => {

  const { cart, lang } = useContext(CartContext);
  const navigate = useNavigate();


  const handleContinueShoppingClick = () => {
    // Use navigate() to navigate to /checkout
    navigate('/butik');
    props.toggleSidebar();
  };

  const handleCheckoutClick = () => {

    if(cart.length>0) {
      // Use navigate() to navigate to /checkout
      navigate('/customerregister');
      props.toggleSidebar();
  } else {
    alert("Kundvagnen är tom!")
  }

  };



  let continueShopping: string;
  let checkOut: string;
  if(lang==="swe") { continueShopping = "Fortsätt handla"; checkOut = "Till Kassan"; }
  else { continueShopping = "Continue shopping"; checkOut = "Checkout"; }

     return (
<div className= 'Shop-Button-Container'>
<Button variant="contained" size="small" sx={{backgroundColor: 'grey', margin:'10px'}} onClick={handleContinueShoppingClick}>{continueShopping}</Button>
<Button variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin: '10px'}} onClick={handleCheckoutClick}>{checkOut}</Button>
</div>
    )}

export default CheckoutButtons;



