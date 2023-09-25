import { useContext } from "react";
import { CartContext } from "./CartContext";
import CheckoutButtons from "./components/CheckoutButtons";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import './Cart.css';

export default function Cart(props) {
  const { cart, removeFromCart } = useContext(CartContext);
  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      const subtotal = product.price * product.quantity;
      total += subtotal;
    });
    return total;
  };

  return (
    <div className="cart-container">
      <h3>Kundvagn:</h3>
      {cart.map((product, index) => (
        <div key={index}>
          <IconButton aria-label="delete" size="small" color="primary" onClick={() => removeFromCart(product.id)}>
          <p>
            {product.quantity} st {product.name}   | {product.price} kr /st
          </p>
          
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>
      ))}
      <h4>Totalpris: {totalPrice()} kr</h4>
      <CheckoutButtons toggleSidebar={props.toggleSidebar}></CheckoutButtons>
    </div>
  );
}
