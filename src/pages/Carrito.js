import React from "react";
import { Card, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useCarrito, useProductos } from "../hooks";

const Carrito = () => {
  const { carrito } = useCarrito();
  const { getProductoById } = useProductos();

  if (!carrito.length) return "No tienes productos en la cesta";

  const handlerChange = () => "";

  const handlerRemove = () => "";

  return (
    <Container className="mt-5">
      <Row>
        {carrito.map(({ id, cantidad }) => {
          const { image, price, title } = getProductoById(id);

          return (
            <Col key={id}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Img variant="top" src={image} />
                    </Col>
                    <Col>
                      <Card.Title>{title}</Card.Title>
                      <Card.Title>{price}€</Card.Title>
                      <Stack>
                        <div>Cantidad:</div>
                        <Form.Select size="sm" onChange={handlerChange}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Form.Select>
                        <div className="vr" />
                        <Card.Link href="#" onClick={handlerRemove}>
                          Eliminar
                        </Card.Link>
                      </Stack>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Carrito;
