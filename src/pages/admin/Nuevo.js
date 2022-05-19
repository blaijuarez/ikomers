import { Formik } from "formik";
import { useState } from "react";
import {
  Alert,
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
import * as yup from "yup";

import { useUsuario, useProductos } from "../../hooks";

const shcema = yup.object().shape({
  image: yup.string().required(),
  title: yup.string().required(),
  price: yup.string().required(),
  description: yup.string().required(),
});

const Nuevo = () => {
  const [mensajeExito, setMensajeExito] = useState(false);
  const { usuario } = useUsuario();
  const { addProduct } = useProductos();

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

  const handlerSave = (datos) => {
    addProduct(datos);
    setMensajeExito(true);
  };

  return (
    <Container className="col-md-5 mx-auto">
      <Row>
        <Col>
          <Alert show={mensajeExito} className="mt-3" variant="success">
            El producto se ha creado corectamente
          </Alert>
          <CardGroup>
            <Card.Body>
              <Card.Title className="mb-3">Nuevo Producto</Card.Title>
              <Formik
                onSubmit={handlerSave}
                validationSchema={shcema}
                initialValues={{
                  image: "",
                  title: "",
                  price: "",
                  description: "",
                }}
              >
                {({ handleSubmit, handleChange, errors, resetForm }) => (
                  <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <FloatingLabel
                      controlId="image"
                      label="Imagen"
                      className="mb-3"
                    >
                      <Form.Control
                        isInvalid={!!errors.image}
                        onChange={handleChange}
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
                      <Form.Control
                        isInvalid={!!errors.title}
                        onChange={handleChange}
                        name="title"
                        type="text"
                        placeholder="Titulo"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="price"
                      label="Precio"
                      className="mb-3"
                    >
                      <Form.Control
                        isInvalid={!!errors.price}
                        onChange={handleChange}
                        name="price"
                        type="text"
                        placeholder="Precio"
                      />
                    </FloatingLabel>
                    <Form.Group
                      controlId="description"
                      label="Descripción"
                      className="mb-3"
                    >
                      <Form.Control
                        isInvalid={!!errors.description}
                        onChange={handleChange}
                        name="description"
                        as="textarea"
                        rows={7}
                        placeholder="Descripción"
                      />
                    </Form.Group>
                    <Button type="submit" variant="secondary" className="mb-4">
                      Añadir
                    </Button>
                    <Button
                      variant="secondary"
                      className="mb-4 mx-5"
                      onClick={({ target }) => {
                        target.parentElement.reset();
                        resetForm();
                      }}
                    >
                      Limpiar
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

export default Nuevo;
