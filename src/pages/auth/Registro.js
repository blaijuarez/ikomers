import { ErrorMessage, Formik } from "formik";
import React from "react";
import * as yup from "yup";
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

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, "La contraseña debe tener un mínimo de 6 caracteres")
    .max(15, "Has superado el máximo de caracteres permitidos"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "La contraseña no coincide"),
});

const Registro = () => {
  const { usuario, add } = useUsuario();

  if (usuario && usuario.id) return <Navigate to="/" replace={true} />;

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card.Body>
              <Card.Title>Registro</Card.Title>
              <Formik
                onSubmit={add}
                validationSchema={schema}
                initialValues={{
                  email: "",
                  password: "",
                  confirmPassword: "",
                  isAdmin: false,
                }}
              >
                {({ handleSubmit, handleChange, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Dirección de email"
                      className="mb-3"
                    >
                      <Form.Control
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        isInvalid={!!errors.email}
                      />
                    </FloatingLabel>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Escribe la contraseña"
                      className="mb-3"
                    >
                      <Form.Control
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Escribe la contraseña"
                        isInvalid={!!errors.password}
                      />
                    </FloatingLabel>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                    <FloatingLabel
                      controlId="floatingConfirmPassword"
                      label="Repite la contraseña"
                      className="mb-3"
                    >
                      <Form.Control
                        onChange={handleChange}
                        name="confirmPassword"
                        type="password"
                        placeholder="Repite la contraseña"
                        isInvalid={!!errors.confirmPassword}
                      />
                    </FloatingLabel>
                    <Form.Check
                      onChange={handleChange}
                      className="mb-4"
                      name="isAdmin"
                      id="ControlIsAdmin"
                      label="Es administrador"
                    />
                    <Button variant="secondary" type="submit">
                      Registrar
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
