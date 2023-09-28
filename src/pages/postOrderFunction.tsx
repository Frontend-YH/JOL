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
      const postnordChecked = localStorage.getItem('postnord') === 'true';
      const dhlChecked = localStorage.getItem('dhl') === 'true';
      const dbSchenkerChecked = localStorage.getItem('dbSchenker') === 'true';
      const swish = localStorage.getItem('swish') === 'true';
      const kort = localStorage.getItem('kort') === 'true';
      const phonenumber = localStorage.getItem('phoneNumber');
      const totalAndShipping = localStorage.getItem('totalCost');
    
      

      const orderData = {
        shipping: postnordChecked || dhlChecked || dbSchenkerChecked,
        address: address,
        city: city,
        phone: phonenumber,
        products: cart,
        totalCost: totalAndShipping,
        payMethod: swish || kort,
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