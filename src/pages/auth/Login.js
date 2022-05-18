import React, { useState } from "react";
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
import { useUsuario } from "../../hooks";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { usuario, login } = useUsuario();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target;

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      const [email, password] = new FormData(form).values();
      login({ email, password });
    }
  };

  if (usuario && usuario.id) return <Navigate to="/" replace={true} />;

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Dirección de email"
                  className="mb-3"
                >
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Escribe la contraseña"
                  className="mb-3"
                >
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Escribe la contraseña"
                    required
                  />
                </FloatingLabel>
                <Button variant="secondary" type="submit">
                  Registrar
                </Button>
              </Form>
            </Card.Body>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
