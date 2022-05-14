import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FichaProducto from "../componentes/FichaProducto";

const Listado = () => {
  const productos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container fluid="md" className="mt-5">
      <Row style={{ rowGap: "10px" }}>
        {productos.map((data) => (
          <Col key={data}>
            <FichaProducto />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listado;
