import { useContext, useEffect, useState } from "react";
import Context from "../context/StaticContext";
import { productosApi } from "../services";

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const { productContext, setProductContext } = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      const { data } = await productosApi.get();
      setProductContext(data);
    };
    if (!productContext.length) {
      getData();
    } else {
      setProductos(productContext);
    }
  }, [productContext, setProductContext]);

  const getProductoById = (_id) => productos.find(({ id }) => id === _id);

  const addProduct = async (producto) => {
    try {
      const { data } = await productosApi.add(producto);
      setProductContext([...productos, data]);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    productos,
    getProductoById,
    addProduct,
  };
};

export default useProductos;
