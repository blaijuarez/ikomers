import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useProductos from "../hooks/useProductos";
import useCarrito from "../hooks/useCarrito";

const Detalle = () => {
  const { getProductoById } = useProductos();
  const { id } = useParams();
  const producto = getProductoById(id);
  const { add } = useCarrito();
  const [cantidad, setCantidad] = useState(1);

  if (!producto) return "";

  const { description, image, price, title } = producto;

  const handlerAdd = () => {
    add({ id, cantidad });
  };

  const handlerChange = ({ target }) => {
    const { selectedIndex } = target;
    const { value } = target[selectedIndex];
    setCantidad(value);
  };

  return (
    <Container className="mt-5">
      <Link to="/">Volver</Link>
      <Row>
        <Col>
          <Card.Img variant="top" src={image} />
        </Col>
        <Col>
          <Card.Title>{title}</Card.Title>
          <hr />
          <h4>{price}€</h4>
          <hr />
          <Card.Text>{description}</Card.Text>
          <hr />
          <Stack>
            <div>Cantidad:</div>
            <Form.Select size="sm" onChange={handlerChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
            <div className="vr" />
            <Button onClick={handlerAdd} variant="secondary">
              Añadir
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Detalle;
