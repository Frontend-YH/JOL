import { ReactNode, createContext, useState } from "react";
import { Product, CartProduct } from "./data.ts";

interface ContextValue {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  toggleCart: () => void;
  isCartOpen: boolean;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  toggleCart: () => {},
  isCartOpen: false,
});

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product: Product) => {
    //setCart((prevState) => [...prevState, product]);
    const productInCart = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (productInCart) {
      const updatedCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        } else {
          return cartProduct;
        }
      });
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isCartOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
}