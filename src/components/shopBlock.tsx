import { Box, Container } from '@mui/material';
import '../shopblock.css';
import OrdersContainer from '../pages/orders';

function ShopBlock() {
    return ( <div id= 'ShopContainer'>

            <Container sx={{minHeight: '20%'}}>
                <Container sx={{ height: '10%', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'end'}}>
                    <h1></h1>
                         <Box justifyContent={'end'}>  
                            <OrdersContainer></OrdersContainer>          
                        </Box>
                </Container>
            </Container>
    </div> );
}

export default ShopBlock;