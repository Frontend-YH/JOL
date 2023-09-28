import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { Card, CardContent, Button, TextField } from "@mui/material";


function AdminEditProduct(props) {
    const { addToCart } = useContext(CartContext);
    const [data, setData] = useState([]);

   



    interface Product {
        _id: string,
        articleNumber: string,
        name: string;
        engName: string;
        description: string;
        engDescription: string;
        price: string;
        picture: string[];
        thumbnail: string[];
        numberAvailable: string;
        category: string;
        //filter: (criteria: string) => [];
    }
        
        const [formData, setFormData] = useState<Product>({
            _id: "",
            articleNumber: '',
            name: "",
            engName: "",
            description: "",
            engDescription: "",
            price: "",
            picture: [""],
            thumbnail: [""],
            numberAvailable: "",
            category: "",
            //filter: (criteria: string) => [];
        });
    //    const handleAddProduct = () => {
    //        const productDataJson = JSON.stringify(formData);
    //
    //        fetch('http://localhost:3000/products', {
    //            method: "GET",
    //            headers: {
    //                "Content-Type": "application/json",
    //            },
    //            body: productDataJson,
    //        })
    //        .then((response) => {
    //            if (response.ok) {
    //                console.log(productDataJson);
    //                setFormData({
    //                    name: "",
    //                    engName: "",
    //                    description: "",
    //                    engDescription: "",
    //                    price: "",
    //                    picture: [""],
    //                    thumbnail: [""],
    //                    numberAvailable: "",
    //                    category: "",
    //                });
    //            } else {
    //                console.error("Failed to add product");
    //            }
    //        })
    //        .catch((error) => {
    //            console.error("Network error:", error);
    //        });
    //    };
    const getData = () => {
        fetch("http://localhost:3000/products")
          .then((res) => res.json())
          .then((formData) => {
            
            setFormData(formData);
            console.log(formData)
          })
          .catch((error) => {
            console.log(error);
            throw new Error("Kan inte hämta data");
          });
      };
    
      useEffect(() => {
        getData();
      }, []);

    //const filtreratResultat = formData.filter((detFiltreradeResultatet) => {
    //return detFiltreradeResultatet._id === "65004e52c6f96ae13130f136";}
    return(<>

        <div className="prod-card">
        <Card sx={{ padding: 8, paddingBottom: "10px", marginBottom: 2, margin: "0px" }}>
            <img style={{ borderRadius: "6px", cursor: "pointer" }} />
            <CardContent>
                <h5>src</h5>
            <TextField component="div" value={filtreratResultat[0].price}>
                </TextField>
               <TextField component="div">
                </TextField>
                <TextField component="div" >
                </TextField>
                <h4 className="price">{formData[0].price}:-</h4>
                <TextField>
                    {props.description}
                </TextField>
            </CardContent>
                <div className="btn-quantity">
                    <Button variant="contained" onClick={() => addToCart(props)}>
                        {props.lang === "swe" ? (
                            <>Ändra Producten</>
                        ) : (
                            <>Edit Product</>
                        )}
                    </Button>
                </div>
        </Card>
        </div>
    </>
    );
}

export default AdminEditProduct;


