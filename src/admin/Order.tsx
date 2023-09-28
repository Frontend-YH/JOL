import { Box } from "@mui/system";
import { useEffect, useState } from "react";

interface Product {
  name: string;
}
type PayMethod = kort | swish;
interface Orders {
  phone: number;
  postCode: number;
  city: string;
  address: string;
  _id: number;
  customerId: string;
  firstName: string;
  lastName: string;
  products: Product[]; 
  totalCost: string;
  payMethod: PayMethod;
  payed: boolean;
  isDone: boolean;
}

function AdminOrders() {
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/orderdata")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          console.log(data);
          setOrders(data);
        } else {
          console.error("Received data is not an array");
          setOrders([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>admin orders</h1>
      <Box>
        {orders.map((order) => (
          <Box sx={{ borderBottom: 1 }} key={order._id}>
            <h2>Beställningsstatus</h2>
            {order.payed ? (
              <p>Beställningen är betald.</p>
            ) : (
              <p>Beställningen är inte betald.</p>
            )}

            {order.isDone ? <p>Ordern är klar</p> : <p>Ordern är inte klar</p>}
            <h5>Kund id:{order._id}</h5>
            <h5>Kundens Förnamn: {order.firstName}</h5>
            <h5>Kundens Efternamn: {order.lastName}</h5>
            <h5>Adress: {order.address}</h5>
            <h5>Stad: {order.city}</h5>
            <h5>Postnummer: {order.postCode}</h5>
            <h5>Telefonnummer: {order.phone}</h5>

           
         {/*    <h5>
  Produkter:
  {order.products.map((product, index) => (
    <div key={index}>
      <h6>{product.name}</h6>
      <p>Beskrivning: {product.description}</p>
      <p>Pris: {product.price} kr</p>
    </div>
  ))}
</h5> */}

            <h5>Kostnad:{order.totalCost}KR</h5>
            <h5>
  Betalnings metod:
  {order.payMethod.swish ? "swish" : "kort"}
</h5>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default AdminOrders;
