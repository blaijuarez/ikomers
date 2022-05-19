import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useUsuario } from "../../hooks";

const Nuevo = () => {
  const { usuario } = useUsuario();

  if (!usuario || !usuario.id) {
    return (
      <Container className="col-md-6 mx-auto">
        <h2>Página restringida</h2>
        <p>
          Logueate para acceder. <NavLink to="/login">Login</NavLink>
        </p>
      </Container>
    );
  }

  if (!usuario.isAdmin) {
    return (
      <Container className="col-md-6 mx-auto">
        <h2>Acceso sólo para administradores</h2>
      </Container>
    );
  }

  return (
    <Container className="col-md-5 mx-auto">
      <Row>
        <Col>
          <CardGroup>
            <Card.Body>
              <Card.Title className="mb-3">Nuevo Producto</Card.Title>
              <Form autoComplete="off" noValidate>
                <FloatingLabel
                  controlId="image"
                  label="Imagen"
                  className="mb-3"
                >
                  <Form.Control
                    name="image"
                    type="text"
                    placeholder="URL Imagen"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="title"
                  label="Titulo"
                  className="mb-3"
                >
                  <Form.Control name="title" type="text" placeholder="Titulo" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="price"
                  label="Precio"
                  className="mb-3"
                >
                  <Form.Control name="price" type="text" placeholder="Precio" />
                </FloatingLabel>
                <Form.Group
                  controlId="description"
                  label="Descripción"
                  className="mb-3"
                >
                  <Form.Control
                    name="description"
                    as="textarea"
                    rows={7}
                    placeholder="Descripción"
                  />
                </Form.Group>
                <Button type="submit" variant="secondary" className="mb-4">
                  Añadir
                </Button>
                <Button variant="secondary" className="mb-4 mx-5">
                  Limpiar
                </Button>
              </Form>
            </Card.Body>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Nuevo;
