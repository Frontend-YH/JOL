import React, { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";

function PostOrderToServer() {
  const { cart } = useContext(CartContext);
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
  const totalAndShipping = localStorage.getItem("totalCost");


  async function postOrderToServer(orderData) {
    try {
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
      return responseData;
    } catch (error) {
      console.error('Error posting order:', error);
      throw error;
    }
  }

  useEffect(() => {
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
      postCode: postalCode,
    };

    postOrderToServer(orderData)
      .then((responseData) => {
        console.log('Order posted successfully:', responseData);
      })
      .catch((error) => {
        console.error('Error posting order:', error);
      });
  }, []);

  return <div>Order is being posted...</div>;
}

export default PostOrderToServer;