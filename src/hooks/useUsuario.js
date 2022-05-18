import { useContext, useEffect, useState } from "react";
import StaticContext from "../context/StaticContext";
import { usuarioApi } from "../services";

const useUsuario = () => {
  const [usuario, setUsuario] = useState();
  const { usuarioContext, setUsuarioContext } = useContext(StaticContext);

  useEffect(() => {
    usuarioContext && setUsuario(usuarioContext);
  }, [usuarioContext]);

  const add = async ({ email, isAdmin, password }) => {
    try {
      const { data } = await usuarioApi.add({ email, isAdmin, password });
      setUsuarioContext(data);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const { data: allUsuarios } = await usuarioApi.get();
      const _usuario = allUsuarios.find(
        (usuarios) => email === usuarios.email && password === usuarios.password
      );
      _usuario && setUsuarioContext(_usuario);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    usuario,
    add,
    login,
  };
};

export default useUsuario;
