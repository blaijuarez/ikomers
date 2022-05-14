import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/Layout";
import Header from "./componentes/Header";

import Listado from "./pages/Listado";
import Detalle from "./pages/Detalle";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Editar from "./pages/admin/Editar";
import Nuevo from "./pages/admin/Nuevo";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Listado />} />
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="editar" element={<Editar />} />
        <Route path="nuevo" element={<Nuevo />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
      </Routes>
    </Layout>
  );
}

export default App;
