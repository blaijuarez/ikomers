import React from "react";
import { Card, Stack } from "react-bootstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const FichaProducto = ({ id, image, title, price }) => {
  return (
    <Card>
      <Link to={`detalle/${id}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Link>
      <Card.Footer>
        <Stack direction="horizontal" gap={3}>
          <Card.Text>{price}€</Card.Text>
          <MdOutlineAddShoppingCart
            className="ms-auto"
            style={{ fontSize: "40px" }}
          />
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default FichaProducto;
