import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import './AddProduct.css'
import { useEffect, useState } from "react";

interface Product {
    articleNumber: string;
    name: string;
    engName: string;
    description: string;
    engDescription: string;
    price: string;
    picture: [string];
    thumbnail: [string];
    numberAvailable: string;
    category: string;
  }
  
  export default function AddProduct() {
      const [productData, setProductData] = useState<Product>({
          articleNumber: "",
      name: "",
      engName: "",
      description: "",
      engDescription: "",
      price: "",
      picture: [""],
      thumbnail: [""],
      numberAvailable: "",
      category: "",
    });
    
    useEffect(() => {
    const [data, setData] = useState([]);
      fetch("http://localhost:3000/addProducts")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }, []);
  
    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = event.target;
      setProductData({
        ...productData,
        [name]: value,
      });
    };
  
    const handleAddProduct = () => {
      // Handle adding the product here
      console.log("Product Data:", productData);
    };
    

return(
    <Box 
    className="container"
    sx={{
    flexDirection: "row",
    display: 'flex',
    alignItems: 'flex-end',
    gap: 4}}>
        <TextField
        label="atikle-nr"
        size="small"
        name='articleNumber'
        onChange={handleInputChange}
        value={productData.articleNumber}
        style = {{width: 120}}>

        </TextField>
        <TextField
        label="Namn"
        size="small"
        name='name'
        onChange={handleInputChange}
        value={productData.name}
        style = {{width: 120}}>

        </TextField>
        <TextField
        label="NamnEng"
        name='engName'
        onChange={handleInputChange}
        value={productData.engName}
        size="small"
        style = {{width: 120}}>

        </TextField>
        <TextField
        id="standard-multiline-static"
        label="Description"
        name='description'
        onChange={handleInputChange}
        value={productData.description}
        multiline
        placeholder="Placeholder"
        rows={4}
        variant="standard">
            
        </TextField>
        <TextField
        id="standard-multiline-static"
        label="DescriptionENG"
        name='engDescription'
        onChange={handleInputChange}
        value={productData.engDescription}
        multiline
        placeholder="Placeholder"
        rows={4}
        variant="standard">
            
        </TextField>
        <TextField
        className="picture"
        size="small"
        label="Antal"
        name='picture'
        onChange={handleInputChange}
        value={productData.picture}
        style = {{width: 70}}>

        </TextField>
        <TextField
        className="thumbnail"
        size="small"
        name='thumbnail'
        onChange={handleInputChange}
        value={productData.thumbnail}
        label="Antal"
        style = {{width: 70}}>

        </TextField>
        <TextField 
        label="numberAvailable"
        name='numberAvailable'
        onChange={handleInputChange}
        value={productData.numberAvailable}
        size="small">

        </TextField>
        <TextField
        label="catagory"
        name='category'
        onChange={handleInputChange}
        value={productData.category}
        size="small">

        </TextField>
        <Button 
        className="AddProduct" onClick={handleAddProduct}>
            Lägg till Product
        </Button>
    </Box>
    );
}
