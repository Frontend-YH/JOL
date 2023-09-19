import { Box, Container } from '@mui/material';
import '../shopblock.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ShopBlock() {
    return ( <>
        <div className='Shop-Container'>
            <h1>hej</h1>
            <Container>
                <Container sx={{ height: '10%', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'end'}}>
                <Box justifyContent={'end'}>
                    <ArrowForwardIcon fontSize='large'/>                   
                </Box>
                </Container>
            </Container>
        </div>
    </> );
}

export default ShopBlock;