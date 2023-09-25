import "./Shopsmall.css"
import Button from '@mui/material/Button';
function Smallshop(){
    return (
        <div className="SSDiv">
            <h1>Butik</h1>
            <p>Handgjorda produkter i gediget material.</p>
            <div className="product-categories">
            <Button variant="contained" size="medium"id="All-Products2">Redskap</Button>
            <Button variant="contained" size="medium"id="All-Products2">Till dörren</Button>
            <Button variant="contained" size="medium"id="All-Products">Ljustakar ljuskronor belysning</Button>
            <Button variant="contained" size="medium"id="All-Products2">Inredning</Button>
            <Button variant="contained" size="medium"id="All-Products2">Övrigt</Button>
            <Button variant="contained" size="medium"id="All-Products2">Grindar och räcken</Button>
            <Button variant="contained" size="medium"id="All-Products2">Gravkors</Button>
            <Button variant="contained" size="medium"id="All-Products2">Till spisar</Button>
            <Button variant="contained" size="medium"id="All-Products2">Övrigt</Button>
            </div>
        </div>
    )}

    export default Smallshop;