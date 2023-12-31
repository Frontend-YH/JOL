import { ReactNode, createContext, useState, useEffect } from "react";
import { Product, CartProduct, Lang, Category, Categories } from "./dataInterfaces.ts";

interface ContextValue {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  lang: Lang;
  setLang: (lang: Lang) => void; 
  updateCart: (productId: string, quantity: number) => void;
  clearCart: () => void; 
  category: Category; 
  setCategory: (category: Category) => void;
  categories: Categories[];
  setCategories: (categories: Categories[]) => void;
  getCategories: () => void;
}

// Initial values of the Context
export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  lang: "swe",
  setLang: (lang: string) => {},
  updateCart: () => {},
  clearCart: () => {}, 
  category: "all", // default product category
  setCategory: (category: string) => {},
  categories: [],
  setCategories: (categories: Categories[]) => {},
  getCategories: () => {}
})

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const language = localStorage.getItem("language") || "swe"; // swe or eng possible
  const defaultCategory = localStorage.getItem("category") || "all"; // swe or eng possible
  const [lang, setLang] = useState<Lang>(language); // swedish or engling language switch
  const [category, setCategory] = useState<Category>(defaultCategory); // store chosen product category
  const [categories, setCategories] = useState<Categories[]>([]); // list of product categories

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

  // update cart-product quantity. Decreasing on 1 means 0
  // which means complete DELETE of that product from the cart
  const updateCart = (productId: string, quantity: number) => {
    const updatedCart = cart.map((product) => { 
      if (product.id === productId) {
        if (quantity < 1) { 
          return null; // make the entry (product) NULL
        } else {
          product.quantity = quantity;
        }
      }
      return product;
    }).filter(Boolean); // Remove all NULL entries in the cart Array
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]); // Set the cart state to an empty array
  };

  /* Collect Product Categories from Backend Database */
  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Kan inte hämta data");
      });
  };
  
  // Collect the Categories on launch
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, lang, addToCart, removeFromCart, updateCart, setLang, clearCart, category, setCategory, categories, setCategories, getCategories }}>
      {children}
    </CartContext.Provider>
  );
}