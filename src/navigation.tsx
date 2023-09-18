import { ReactNode } from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom"
import { Grid, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navigation.css'

interface CustomLinkProps{
    to: string;
    children: ReactNode;
}
 const Navigation = () => {
  const location = useLocation();
  const isNotAdminRoute = !location.pathname.startsWith('/admin');
    return isNotAdminRoute ? (
    <nav className="nav">
      <ul>
          <Link to="/">Home</Link>
          <CustomLink to="/product">Product</CustomLink>
          <Button onClick={() => { console.log('onClick'); }}>
            <ShoppingCartIcon fontSize="large"/>
          </Button>
      </ul>
    </nav>
    ) : null;
}

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