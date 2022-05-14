import { createContext, useState } from "react";

const Context = createContext({});

export const StaticContext = ({ children }) => {
  const [productContext, setProductContext] = useState([]);

  return (
    <Context.Provider
      value={{
        productContext,
        setProductContext,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
