import { Box } from "@mui/system";
import { useEffect, useState } from "react";

interface Orders{
    _id: number,
    customerId: string,
    products: string[],
    totalCost: string,
    payMethod: string,
    payed: boolean,
    isDone: boolean;
}
function AdminOrders() {
    const [orders, setOrders] = useState<Orders[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/orderdata')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (Array.isArray(data)) {
              setOrders(data);
            } else {
              console.error('Received data is not an array');
              setOrders([]);
            }
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    return ( <>
    <h1>admin orders</h1>
    <Box>
        {orders.map((order) => (
          <Box sx={{ borderBottom: 1 }}key={order._id}>
            <h5>Kund id:{order.customerId}</h5>
            <h5>Produkter:{order.products}</h5>
            <h5>Kostnad:{order.totalCost}KR</h5>
            <h5>Betalning metod:{order.payMethod}</h5>
            <h5>Betalad:{order.payed}</h5>
            <h5>Är ordern klar: {order.isDone}</h5>
          </Box>
        ))}
      </Box>
    </> );
}

export default AdminOrders;