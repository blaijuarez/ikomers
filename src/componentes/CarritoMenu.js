import styled from "styled-components";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";

import useCarrito from "../hooks/useCarrito";

const Wrapper = styled.div`
  position: relative;
  a {
    color: white;
    text-decoration: none;
  }
  span.badge {
    position: absolute;
    right: -20px;
    top: -10px;
  }
`;

const CarritoMenu = () => {
  const { carrito } = useCarrito();

  return (
    <Wrapper>
      <Badge pill bg="danger" text="light">
        {carrito.length}
      </Badge>
      <Link to="/carrito">
        <MdOutlineShoppingCart
          style={{
            fontSize: "28px",
          }}
        />
      </Link>
    </Wrapper>
  );
};

export default CarritoMenu;
