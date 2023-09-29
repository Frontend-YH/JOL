import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./order.css";

interface Product {
  price: number;
  imgUrls: string;
  name: string;
}
type PayMethod = "kort" | "swish";

interface Orders {
  shipping: string;
  phone: number;
  postCode: number;
  city: string;
  address: string;
  _id: string;
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

  const toggleIsDone = async (orderId: string, currentIsDone: boolean) => {
    const updatedIsDone = !currentIsDone; // Flip the value

    try {
      const response = await fetch(
        `http://localhost:3000/order/${orderId}/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isDone: updatedIsDone }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Uppdatera den lokala state med det nya värdet
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, isDone: updatedIsDone } : order
        )
      );
    } catch (error) {
      console.error("Fel vid uppdatering av isDone:", error);
    }
  };

  return (
    <>
      <h1>admin orders</h1>
      <Box>
        {orders.map((order) => (
          <Box
            sx={{ borderBottom: 1 }}
            key={order._id}
            className="order-container"
          >
            <h2>Beställningsstatus</h2>
            {order.payed ? (
              <p>Beställningen är betald.</p>
            ) : (
              <p>Beställningen är inte betald.</p>
            )}

            <button onClick={() => toggleIsDone(order._id, order.isDone)}>
              {order.isDone
                ? "Ordern är skickad ✅"
                : "Ordern är inte skickad❌"}
            </button>
            <h5>
              {Array.isArray(order.products) && order.products.length > 0 ? (
                order.products.map((product, index) => (
                  <div key={index}>
                    <h6>{product.name}</h6>
                    {Array.isArray(product.imgUrls) &&
                    product.imgUrls.length > 0 ? (
                      <img
                        src={product.imgUrls[0]}
                        alt="Produktbild"
                        className="pic-orders"
                      />
                    ) : (
                      <p>Ingen bild tillgänglig</p>
                    )}
                    <p>Pris: {product.price} kr</p>
                  </div>
                ))
              ) : (
                <p>Inga produkter tillgängliga</p>
              )}
            </h5>

            <h5>Kund id:{order._id}</h5>
            <h5>Kundens Förnamn: {order.firstName}</h5>
            <h5>Kundens Efternamn: {order.lastName}</h5>
            <h5>Adress: {order.address}</h5>
            <h5>Stad: {order.city}</h5>
            <h5>Postnummer: {order.postCode}</h5>
            <h5>Telefonnummer: {order.phone}</h5>
            <h5>Fraktsätt: {order.shipping}</h5>

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
