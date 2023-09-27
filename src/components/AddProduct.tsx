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
        value={formData.articleNumber}
        style = {{width: 120}}>

        </TextField>
        <TextField
        label="Namn"
        size="small"
        name='name'
        onChange={handleInputChange}
        value={formData.name}
        style = {{width: 120}}>

        </TextField>
        <TextField
        label="NamnEng"
        name='engName'
        onChange={handleInputChange}
        value={formData.engName}
        size="small"
        style = {{width: 120}}>

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
        variant="standard">
            
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
        variant="standard">
            
        </TextField>
        <TextField
        className="picture"
        size="small"
        label="Antal"
        name='picture'
        onChange={handleInputChange}
        value={formData.picture}
        style = {{width: 70}}>

        </TextField>
        <TextField
        className="thumbnail"
        size="small"
        name='thumbnail'
        onChange={handleInputChange}
        value={formData.thumbnail}
        label="Antal"
        style = {{width: 70}}>

        </TextField>
        <TextField 
        label="numberAvailable"
        name='numberAvailable'
        onChange={handleInputChange}
        value={formData.numberAvailable}
        size="small">

        </TextField>
        <TextField
        label="catagory"
        name='category'
        onChange={handleInputChange}
        value={formData.category}
        size="small">

        </TextField>
        <Button 
        className="AddProduct" onClick={handleAddProduct}>
            Lägg till Product
        </Button>
    </Box>
    );
}