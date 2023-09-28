import { useEffect, useState } from 'react';
import { CartContext } from '../CartContext';
import { useContext } from "react";
function clear (){
  const { cart } = useContext(CartContext);
  localStorage.clear();
  cart.splice(0, cart.length);
}
function useOrderPost() {
  const { cart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePostOrder = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Your order posting logic here
      const firstName = localStorage.getItem('firstName') || '';
      const lastName = localStorage.getItem('lastName') || '';
      const address = localStorage.getItem('address') || '';
      const postalCode = localStorage.getItem('postalCode') || '';
      const city = localStorage.getItem('city') || '';
      const shipping = localStorage.getItem('postnord') === 'true'
      ? 'Postnord'
      : localStorage.getItem('dhl') === 'true'
      ? 'DHL'
      : localStorage.getItem('dbSchenker') === 'true'
      ? 'DB Schenker'
      : ''; 
      const payMethod = {
        swish: localStorage.getItem('swish') === 'true' ? 'true' : 'false',
        kort: localStorage.getItem('kort') === 'true' ? 'true' : 'false',
      };
      const phonenumber = localStorage.getItem('phoneNumber');
      const totalAndShipping = localStorage.getItem('totalCost');
      const email = localStorage.getItem('email');
    
      

      const orderData = {
        shipping: shipping,
        email: email,
        address: address,
        city: city,
        phone: phonenumber,
        products: cart,
        totalCost: totalAndShipping,
        payMethod: payMethod,
        payed: true,
        isDone: false,
        firstName: firstName,
        lastName: lastName,
        postCode: postalCode
      };

      const response = await fetch('http://localhost:3000/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to post order');
      }

      const responseData = await response.json();
      console.log('Order posted successfully:', responseData);
      window.alert(`Din order är nu beställd. Ditt ordernummer är: ${responseData.user._id}`);
      // If successful, you can update state or return any data if needed

    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handlePostOrder };
}

export default useOrderPost;