import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import './AddProduct.css'
import { useState } from "react";

interface Product {
    articleNumber: string;
    name: string;
    engName: string;
    description: string;
    engDescription: string;
    price: string;
    picture: string[];
    thumbnail: string[];
    numberAvailable: string;
    category: string;
}

export default function AddProduct() {
    
    const [formData, setFormData] = useState<Product>({
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

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if(name === 'thumbnail'){
            formData.thumbnail[0] = value
        }else if(name === "picture"){
            formData.picture[0] = value
        }else{
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    };

    const handleAddProduct = () => {
        const productDataJson = JSON.stringify(formData);

        fetch('http://localhost:3000/addproduct', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: productDataJson,
        })
        .then((response) => {
            if (response.ok) {
                console.log(productDataJson);
                setFormData({
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
            } else {
                console.error("Failed to add product");
            }
        })
        .catch((error) => {
            console.error("Network error:", error);
        });
    };

return(
    <Box
    sx={{
        flexDirection: "column"
    }}
    >
    <Box 
    className="container"
    sx={{
    flexDirection: "row",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4}}>
        <TextField
        label="atikle-nr"
        size="small"
        name='articleNumber'
        onChange={handleInputChange}
        value={formData.articleNumber}
        style = {{width: 120, marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>

        </TextField>
        <TextField
        label="Namn"
        size="small"
        name='name'
        onChange={handleInputChange}
        value={formData.name}
        style = {{width: '120px', marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>

        </TextField>
        <TextField
        label="NamnEng"
        name='engName'
        onChange={handleInputChange}
        value={formData.engName}
        size="small"
        style = {{width: 120, marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>

        </TextField>
        <TextField
        id="standard-multiline-static"
        label="Description"
        name='description'
        onChange={handleInputChange}
        value={formData.description}
        multiline
        placeholder="Placeholder"
        rows={4}
        variant="standard"
        style = {{width: '200px', marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>   
        </TextField>
        <TextField
        id="standard-multiline-static"
        label="DescriptionENG"
        name='engDescription'
        onChange={handleInputChange}
        value={formData.engDescription}
        multiline
        placeholder="Placeholder"
        rows={4}
        variant="standard"
        style = {{width: '200px', marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>
            
        </TextField>
        </Box>
        <Box
            className="container"
            sx={{
            flexDirection: "row",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4}}>
        <TextField
        className="picture"
        size="small"
        label="Picture"
        name='picture'
        onChange={handleInputChange}
        value={formData.picture}
        style = {{width: 200, marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>

        </TextField>
        <TextField
        className="thumbnail"
        size="small"
        name='thumbnail'
        onChange={handleInputChange}
        value={formData.thumbnail}
        label="Antal"
        style = {{width: 120, marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>

        </TextField>
        <TextField 
        label="numberAvailable"
        name='numberAvailable'
        onChange={handleInputChange}
        value={formData.numberAvailable}
        size="small"
        style = {{width: 120, marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>

        </TextField>
        <TextField
        label="catagory"
        name='category'
        onChange={handleInputChange}
        value={formData.category}
        size="small"
        style = {{width: 120, marginBottom: 30, marginTop: 30, backgroundColor: "white", }}>

        </TextField>
        <Button 
        className="AddProduct" onClick={handleAddProduct}sx={{width: 150, marginBottom: 30, marginTop: 30, bgcolor: 'success.main',color: 'black'}}>
            Lägg till Product
        </Button>
    </Box>
    </Box>
    );
}