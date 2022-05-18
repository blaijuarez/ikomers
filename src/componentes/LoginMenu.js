import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
import { useUsuario } from "../hooks";

const StackStyled = styled(Stack)`
  a {
    color: white;
  }
  .vr {
    height: 37px;
    margin-top: 14px;
  }
`;

const LoginStyled = styled(Stack)`
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

const LoginMenu = () => {
  const { usuario } = useUsuario();

  if (usuario && usuario.id) {
    return (
      <LoginStyled direction="horizontal" gap={1}>
        <div className="text-light">{usuario.name}</div>
        <img src={usuario.avatar} alt={usuario.name} />
      </LoginStyled>
    );
  }

  return (
    <StackStyled direction="horizontal" gap={3} className="text-light">
      <div className="ms-auto">
        <Link to="/login">Acceder</Link>
      </div>
      <div className="vr" />
      <div className="">
        <Link to="/registro">Registrar</Link>
      </div>
    </StackStyled>
  );
};

export default LoginMenu;
