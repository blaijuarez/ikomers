import { Form } from "react-bootstrap";
import { useProductos } from "../hooks";

const Search = () => {
  const { buscar } = useProductos();

  const search = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target;
    const [palabra] = new FormData(form).values();
    buscar(palabra);
    form.reset();
  };

  return (
    <Form autoComplete="off" noValidate onSubmit={search}>
      <Form.Control
        size="lg"
        name="buscar"
        type="text"
        placeholder="Buscar producto..."
      />
    </Form>
  );
};

export default Search;
