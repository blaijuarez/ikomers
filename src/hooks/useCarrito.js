import { useContext, useEffect, useState } from "react";
import Context from "../context/StaticContext";

const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const { carritoContext, setCarritoContext } = useContext(Context);

  useEffect(() => {
    setCarrito(carritoContext);
  }, [carritoContext]);

  const add = (newCarrito) => {
    const data = carrito.filter(({ id }) => id !== newCarrito.id);
    setCarritoContext([...data, newCarrito]);
  };

  const remove = (id) => "";

  return {
    carrito,
    add,
    remove,
  };
};

export default useCarrito;
