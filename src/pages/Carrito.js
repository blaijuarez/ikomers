import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import { useCarrito, useProductos } from "../hooks";

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const { carrito, add, remove } = useCarrito();
  const { getProductoById } = useProductos();

  useEffect(() => {
    const calcularTotal = carrito.reduce((acc, { id, cantidad }) => {
      const { price } = getProductoById(id);
      const parsePrice = parseInt(price, 10);
      return parsePrice * cantidad + acc;
    }, 0);
    setTotal(calcularTotal);
  }, [carrito, getProductoById]);

  if (!carrito.length) return "No tienes productos en la cesta";

  const handlerChange = (id, { target }) => {
    const { selectedIndex } = target;
    const { value: cantidad } = target[selectedIndex];
    add({ id, cantidad });
  };

  const handlerRemove = (id) => remove(id);

  return (
    <Container className="mt-5">
      <Row xs={1} md={1} className="g-4">
        {carrito.map(({ id, cantidad }) => {
          const { image, price, title } = getProductoById(id);

          return (
            <Col key={id}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <Card.Img variant="top" src={image} />
                    </Col>
                    <Col>
                      <Card.Title>{title}</Card.Title>
                      <Card.Title>{price}€</Card.Title>
                      <Stack>
                        <div>Cantidad:</div>
                        <Form.Select
                          size="sm"
                          defaultValue={cantidad}
                          onChange={handlerChange.bind(this, id)}
                        >
                          <option value={"1"}>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Form.Select>
                        <div className="vr" />
                        <Card.Link
                          href="#"
                          onClick={handlerRemove.bind(this, id)}
                        >
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
      <Row>
        <Col>
          <h4>
            <b>Subtotal</b> productos({carrito.length}) <b>:</b>
          </h4>
          <h3>{total}€</h3>
          <Button variant="secondary">Tramitar pedido</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;
