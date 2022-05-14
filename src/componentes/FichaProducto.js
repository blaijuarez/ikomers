import React from "react";
import { Card, Stack } from "react-bootstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const FichaProducto = ({ image, title, price }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <Card.Text>{price}€</Card.Text>
          <MdOutlineAddShoppingCart
            className="ms-auto"
            style={{ fontSize: "40px" }}
          />
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default FichaProducto;
