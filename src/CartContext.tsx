import { ReactNode, createContext, useState, useEffect } from "react";
import { Product, CartProduct, Lang } from "./dataInterfaces.ts";

interface ContextValue {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  lang: Lang;
  setLang: (lang: Lang) => void; 
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  lang: "swe",
  setLang: (lang: string) => {}
});

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartProduct[]>([]);
  //const language = localStorage.getItem("language") || "swe"; // swe or eng possible
  const [lang, setLang] = useState<Lang>(); // swedish or engling language switch

  const addToCart = (product: Product) => {
  
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
      value={{ cart, lang, addToCart, removeFromCart, setLang }}
    >
      {children}
    </CartContext.Provider>
  );
}