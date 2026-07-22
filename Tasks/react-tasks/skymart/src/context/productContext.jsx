import { createContext, useState } from "react";

export const ProdStore = createContext();

export const ProdContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  return (
    <ProdStore.Provider value={{ products, setProducts }}>
      {children}
    </ProdStore.Provider>
  );
};
