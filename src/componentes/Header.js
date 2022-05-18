import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import CarritoMenu from "./CarritoMenu";
import LoginMenu from "./LoginMenu";
import Menu from "./Menu";

const LogoStyled = styled.h2`
  a {
    font-weight: bold;
    font-size: xxx-large;
    color: #ec52a7;
    text-decoration: none;
  }
`;

const ContainerStyled = styled.div`
  max-width: 100%;
  width: 100vw;
  padding: 10px 0 0;
  background-color: #414141;
`;

const ItemsColStyled = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

const Header = () => {
  return (
    <ContainerStyled>
      <Container>
        <Row>
          <Col sm={3}>
            <LogoStyled>
              <Link to="/">iKomers</Link>
            </LogoStyled>
          </Col>
          <ItemsColStyled>
            <LoginMenu />
            <CarritoMenu />
          </ItemsColStyled>
        </Row>
      </Container>
      <Menu />
    </ContainerStyled>
  );
};

export default Header;
