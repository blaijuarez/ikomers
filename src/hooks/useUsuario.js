import { useContext, useEffect, useState } from "react";
import StaticContext from "../context/StaticContext";
import { usuarioApi } from "../services";

const useUsuario = () => {
  const [usuario, setUsuario] = useState();
  const { usuarioContext, setUsuarioContext } = useContext(StaticContext);

  useEffect(() => {
    function checkLogin() {
      const _usuario = localStorage.getItem("usuario");
      _usuario && setUsuarioContext(JSON.parse(_usuario));
    }

    !usuarioContext && checkLogin();
    usuarioContext && setUsuario(usuarioContext);
  }, [setUsuarioContext, usuarioContext]);

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
      if (_usuario) {
        setUsuarioContext(_usuario);
        persistirUsuario(_usuario);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const persistirUsuario = (_usuario) => {
    localStorage.setItem("usuario", JSON.stringify(_usuario));
  };

  return {
    usuario,
    add,
    login,
  };
};

export default useUsuario;
