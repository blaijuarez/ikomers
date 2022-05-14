import { createContext, useState } from "react";

const Context = createContext({});

export const StaticContext = ({ children }) => {
  const [productContext, setProductContext] = useState([]);
  const [carritoContext, setCarritoContext] = useState([]);

  return (
    <Context.Provider
      value={{
        productContext,
        setProductContext,
        carritoContext,
        setCarritoContext,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
