import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import Button from '@mui/material/Button';
import PostOrderToServer from './postOrderFunction'
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

import  postOrderToServer  from './postOrderFunction';
function OrderButton() {
  const handleOrderClick = () => {
    const orderData = {
      shipping: postnordChecked || dhlChecked || dbSchenkerChecked,
      address: address,
      city: city,
      phone: phonenumber,
      products: [],
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
        // Handle the successful response here if needed
      })
      .catch((error) => {
        console.error('Error posting order:', error);
        // Handle any errors that occur during the request
      });
  };

  return (
    <button onClick={handleOrderClick}>Place Order</button>
  );
}

export default OrderButton;