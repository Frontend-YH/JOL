import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    // Use navigate() to navigate to /checkout
    navigate('/customerregister');
    props.toggleSidebar();
  };

  const handleContinueShoppingClick = () => {
    // Use navigate() to navigate to /checkout
    navigate('/butik');
    props.toggleSidebar();
  };

  let continueShopping: string;
  let checkOut: string;
  if(props.lang==="swe") { continueShopping = "Fortsätt handla"; checkOut = "Till Kassan"; }
  else { continueShopping = "Continue shopping"; checkOut = "Checkout"; }

     return (
<div className= 'Shop-Button-Container'>
<Button variant="contained" size="small" sx={{backgroundColor: 'grey', margin:'10px'}} onClick={handleContinueShoppingClick}>{continueShopping}</Button>
<Button variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin: '10px'}} onClick={handleCheckoutClick}>{checkOut}</Button>
</div>
    )}

export default CheckoutButtons;



