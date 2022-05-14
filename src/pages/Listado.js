import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useProductos from "../hooks/useProductos";

import FichaProducto from "../componentes/FichaProducto";

const Listado = () => {
  const { productos } = useProductos();

  return (
    <Container fluid="md" className="mt-5">
      <Row style={{ rowGap: "10px" }}>
        {productos.map((data) => (
          <Col key={data.id}>
            <FichaProducto {...data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listado;
