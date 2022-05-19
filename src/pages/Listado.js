import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useProductos from "../hooks/useProductos";

import FichaProducto from "../componentes/FichaProducto";
import Search from "../componentes/Search";

const Listado = () => {
  const { productos, productosRedux } = useProductos();

  const elementos = productosRedux.length ? productosRedux : productos;

  return (
    <Container fluid="md" className="mt-5">
      <Row className="mb-4">
        <Search />
      </Row>
      <Row style={{ rowGap: "10px" }}>
        {elementos.map((data) => (
          <Col key={data.id}>
            <FichaProducto {...data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listado;
