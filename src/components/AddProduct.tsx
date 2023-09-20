import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

function AddProduct() {
    return ( <>
    <Box 
    sx={{flexDirection: "row",
    display: 'flex',
    alignItems: 'flex-end',
    gap: 4}}>
        <Box 
        component='img'
        className="ProductImg"
        height={250}
        width={250}>

        </Box>
        <TextField
        label="Namn"
        size="small"
        style = {{width: 120}}>

        </TextField>
        <TextField
        id="standard-multiline-static"
        label="Description"
        multiline
        placeholder="Placeholder"
        rows={4}
        variant="standard">
            
            
        </TextField>
        <TextField
        className="ProductAmount"
        size="small"
        label="Antal"
        style = {{width: 70}}>

        </TextField>
        <TextField 
        label="ProductPrice"
        size="small">

        </TextField>
        <Button 
        className="AddProduct">
            Lägg till Product
        </Button>
    </Box>
    </> );
}

export default AddProduct;