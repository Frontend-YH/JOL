import { useContext } from "react";
import { CartContext } from "../CartContext"
import CheckoutButtons from "./CheckoutButtons";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import './Cart.css';
//import QuantityInput from "./_QuantityInput";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Cart(props) {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);
  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      const subtotal = product.price * product.quantity;
      total += subtotal;
    });
    return total;
  };

  // increase or decrease cart-product quantity. Decreasing on 1 = 0, = complete delete.
  const handleButtonClick = (event, operation, product, quantity) => {
    event.preventDefault();
    if (operation === 'increase') {
      updateCart(product, (quantity + 1));
    } else if (operation === 'decrease') {
      updateCart(product, (quantity - 1));
    }
  };

  return (
    <div className="cart-container">
      <h3>Kundvagn</h3>
      {cart.map((product, index) => (
        <div key={index}>
          
     
          <div style={{display: "flex", minWidth: "320px"}} className="cart-item">
          <div className="grid-item">
          <button onClick={(e) => handleButtonClick(e, 'decrease', product.id, product.quantity)}>
            <RemoveIcon color="primary" />
          </button>
          <input type="text" value={product.quantity} readOnly />
          <button onClick={(e) => handleButtonClick(e, 'increase', product.id, product.quantity)}>
            <AddIcon color="primary" />
          </button>
          </div>
          <div className="grid-item-img">
          <img src={product.thumbnailUrls[0]}/>
          </div>
          <div className="grid-item" style={{width: "150px"}}>
           <p> {product.name}</p>
           </div>
           <div className="grid-item"><p>{product.price} kr /st</p> 
           </div>
           <div className="grid-item">
           <IconButton aria-label="delete" size="small" color="primary" onClick={() => removeFromCart(product.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          </div>

          </div>
        </div>
      ))}
      <p>Moms 25%: {(totalPrice() * 0.8) / 4} :-</p>
      <h4>Totalbelopp: {totalPrice()} :-</h4>
      <CheckoutButtons toggleSidebar={props.toggleSidebar}></CheckoutButtons>
    </div>
  );
}

/*

      <IconButton aria-label="delete" size="small" color="primary" onClick={() => removeFromCart(product.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>

          */