import { ReactNode, useState } from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom"
import { Grid, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navigation.css'
import BasketStart from "./components/BasketStart";

interface CustomLinkProps{
    to: string;
    children: ReactNode;
}

const Navigation = (props) => {

  const [showCart, setShowCart] = useState(false);
  const showSidebar = () => setShowCart(!showCart);

  const location = useLocation();
  const isNotAdminRoute = !location.pathname.startsWith('/admin');

/* Switch between different languages */
  const handleSweClick = ()=> {
      props.setLang("swe");
  };
  const handleEngClick = ()=> {
    props.setLang("eng");
};
/* ################################### */

  return (
    isNotAdminRoute && (
      <>
        <nav className={"nav"}>
          <h1>Gärdsjö smedja</h1>
          <ul>
            <a href="#swedish" onClick={handleSweClick}><img src="./src/assets/Images/swe.png" className="flag"/></a>
            <a href="#english" onClick={handleEngClick}><img src="./src/assets/Images/eng.png" className="flag"/></a>
            <Link to="/">Home</Link>
            <CustomLink to="/product">Products</CustomLink>
            <Button onClick={showSidebar}>
              <ShoppingCartIcon fontSize="large" />
            </Button>
          </ul>
        </nav>
        {showCart && <BasketStart />}
      </>
    )
  );
};

export default Navigation;

const AdminNavigation = () =>{
  return(<>
    <Grid 
      container spacing={2}
      alignItems="center"
      justifyContent="center">
      <Grid item xs={6}>
        <Box 
        justifyContent="center"
        display="flex"
        sx={{background: "D9D9D9"}}>
          <AdminCustomLink to="/admin/editproduct">editproduct</AdminCustomLink>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box 
        justifyContent="center"
        display="flex"
        sx={{background: "D9D9D9"}}>
          <AdminCustomLink to="/admin/addproduct">addproduct</AdminCustomLink>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
        justifyContent="center"
        display="flex">
          <AdminCustomLink to="/admin/orders">Adminorders</AdminCustomLink>
        </Box>
      </Grid>
    </Grid>
  </>);
}

export {AdminNavigation};


function AdminCustomLink({ to, children, ...props }: CustomLinkProps) {
  
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true})

  return (
      <Button sx={{color: "black", backgroundColor: '#D9D9D9'}} className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </Button>
    ); 
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

