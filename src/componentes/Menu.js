import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useUsuario } from "../hooks";

const Wraper = styled.nav`
  width: 100%;
  padding: 10px 0;
  background-color: #c0c0c0;
  display: flex;
  justify-content: center;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-aroud;
  }

  & li {
    margin: 0;
    padding: 0;
  }
  li > a {
    padding: 13px;
    color: black;
    text-decoration: none;
  }
  li > a.active {
    background-color: #ec52a7;
  }
`;

const Menu = () => {
  const { usuario } = useUsuario();

  return (
    <Wraper>
      <ul>
        <li>
          <NavLink to="/">Listado</NavLink>
        </li>
        <li>
          <NavLink to="contacto">Contacto</NavLink>
        </li>
        {usuario && usuario.id ? (
          <li>
            <NavLink to="nuevo">Administrar</NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </Wraper>
  );
};

export default Menu;
