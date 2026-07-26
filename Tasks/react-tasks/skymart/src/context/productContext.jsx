import { createContext, useState } from "react";

export const ProdStore = createContext();

export const ProdContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false);


  return (
    <ProdStore.Provider value={{ products, setProducts , cartItems, setCartItems, cartOpen, setCartOpen }}>
      {children}
    </ProdStore.Provider>
  );
};
