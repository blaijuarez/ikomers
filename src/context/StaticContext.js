import { createContext, useState } from "react";

const Context = createContext({});

export const StaticContext = ({ children }) => {
  const [productContext, setProductContext] = useState([]);
  const [carritoContext, setCarritoContext] = useState([]);
  const [usuarioContext, setUsuarioContext] = useState([]);

  return (
    <Context.Provider
      value={{
        productContext,
        setProductContext,
        carritoContext,
        setCarritoContext,
        usuarioContext,
        setUsuarioContext,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
