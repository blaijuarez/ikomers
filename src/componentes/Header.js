import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

import CarritoMenu from "./CarritoMenu";
import LoginMenu from "./LoginMenu";
import Menu from "./Menu";

const LogoStyled = styled.h2`
  a {
    font-weight: bold;
    font-size: xxx-large;
    color: green;
    text-decoration: none;
  }
`;

const ContainerStyled = styled.div`
  max-width: 100%;
  width: 100vw;
  padding: 10px 0 0;
  background-color: red;
`;

const Header = () => {
  return (
    <ContainerStyled>
      <Container>
        <Row>
          <Col sm={3}>
            <LogoStyled>
              <a href="#">iKomers</a>
            </LogoStyled>
          </Col>
          <Col>
            <LoginMenu />
            <CarritoMenu />
          </Col>
        </Row>
      </Container>
      <Menu />
    </ContainerStyled>
  );
};

export default Header;
