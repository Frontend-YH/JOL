import '../shopblock.css';
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
import { Box, Checkbox, TextField } from '@mui/material';
import Swish from "./pics/Swish.png";
import kort from "./pics/kort.png";
import postnord from "./pics/postnord.png";
import DHL from "./pics/DHL.jpg";
import DBS from "./pics/DBS.jpg";



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



//Kan inte få datepicker att fungera, så använder vanligt textfeild så länge.
function PaymentForm() {
    return ( <div id= 'Orderingpage'>
        <div className='Register'>
            <Box
            display = "flex"
            flexDirection= "column-reverse"
            width="400px"
            justifyContent="space-evenly"
            alignContent="center"
            padding="5px"
            >
                <Box
                    bgcolor="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    marginTop="20px"
                    paddingTop="20px"
                    paddingBottom="20px"
                    borderRadius="15px"
                    >     
                    <h1>Betalning</h1>
                        <Box id='swish'>
                            <img src={Swish} alt="Swish" 
                            width="60"
                            height="70px" />
                            <Checkbox
                                classes={{root: 'custom-checkbox-root'}}
                            ></Checkbox>  
                            <TextField
                                label = "Telefonnummer" 
                                sx={{ bgcolor: 'white', borderRadius: "5px" }}
                            ></TextField>
                        </Box>
                        <Box id='kort'
                        display="flex"
                        flexDirection="row"
                        >
                        
                            <img src={kort} alt="kort" 
                                width="60"
                                height="70px" />
                            <Checkbox
                                classes={{root: 'custom-checkbox-root'}}
                            ></Checkbox> 
                            <Box className = "CardInput"
                            display="flex"
                            flexDirection="column"
                            >
                                <TextField
                                     label = "Kortnummer" 
                                     sx={{ bgcolor: 'white', borderRadius: "5px" }}
                                ></TextField>
                                 <TextField
                                     label = "Datum" 
                                     sx={{ bgcolor: 'white', borderRadius: "5px" }}
                                ></TextField>
                                <TextField
                                    label = "CVV" 
                                    sx={{ bgcolor: 'white', borderRadius: "5px" }}
                                ></TextField>
                            </Box>
                        </Box> 
                </Box>  
                <Box id = 'leverans'
                display="flex"
                flexDirection="column"
                bgcolor="white"
                borderRadius="15px"
                paddingBottom="15px"
                >
                    <h1>Leverans</h1>
                        <Box id = "postnord"
                            display="flex"
                            flexDirection="row"
                            margin="10px"
                        >
                            <Box className='imgBlock'>
                                <img src={postnord} alt='postnord'
                                width="160"
                                height="120px" 
                                />
                                <p>49:- , 5 dagars leveranstid</p>
                                <p>Levererar till ombud</p>
                            </Box>
                            <Checkbox
                                    classes={{root: 'custom-checkbox-root'}}
                            ></Checkbox> 
                        </Box> 
                        <Box id = "DHL"
                            display="flex"
                            flexDirection="row"
                            margin="10px"
                        >
                            <Box className='imgBlock'>
                                <img src={DHL} alt='DHL'
                                    width="160"
                                    height="60px"/>
                                <p>99:- , 3 dagars leveranstid</p>
                                <p>Levererar till dörren</p>
                            </Box>
                                <Checkbox
                                    classes={{root: 'custom-checkbox-root'}}
                                ></Checkbox> 
                        </Box>
                        <Box id = "DB-SCHENKER"
                            display="flex"
                            flexDirection="row"
                            margin="10px"

                        >
                            <Box className='imgBlock'>
                                <img src={DBS} alt='DB-SCHENKER'
                                width="160"
                                height="60px"
                                />
                                <p>79:- , 3 dagars leveranstid</p>
                                <p>Levererar till ombud</p>
                            </Box>
                                <Checkbox
                                    classes={{root: 'custom-checkbox-root'}}
                                ></Checkbox> 
                        </Box>
                </Box>    
            </Box>
<Box
            display = "flex"
            flexDirection= "row"
            justifyContent="center"
            >




<Button component={CustomLink} to="/Shipping"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin:'10px'}}>Tillbaka</Button>
<Button component={CustomLink} to="/checkout"variant="contained" size="small" sx={{backgroundColor: 'rgb(13, 184, 13)', margin: '10px'}}>Nästa</Button>
</Box>
    </div>
    </div> );
}

export default PaymentForm;