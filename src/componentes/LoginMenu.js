import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stack } from "react-bootstrap";

const StackStyled = styled(Stack)`
  a {
    color: white;
  }
  .vr {
    height: 37px;
    margin-top: 14px;
  }
`;

const LoginMenu = () => {
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
