import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import Button from '@mui/material/Button';
import PostOrderToServer from './postOrderFunction'


// ... Other component imports and code ...

function OrderPost() {
    const { cart } = useContext(CartContext);
    const names = cart.map((item) => item.name);
    // Other variable declarations...

    // State to track if the order has been posted
    const [orderPosted, setOrderPosted] = useState(false);

    // Function to handle the order posting
    const handlePostOrder = () => {
        // Prepare your order data here...
        const orderData = {
            // ... Your order data ...
        };

        // Call the postOrderToServer function
        PostOrderToServer(orderData)
            .then((responseData) => {
                console.log('Order posted successfully:', responseData);
                // Set orderPosted to true to indicate that the order has been posted
                setOrderPosted(true);
            })
            .catch((error) => {
                console.error('Error posting order:', error);
            });
    };

    return (
        <div id='Orderingpage'>
            {/* ... Other JSX code ... */}
            <Button onClick={handlePostOrder}>Post</Button>§
            {/* ... Other JSX code ... */}
        </div>
    );
}

export default OrderPost;