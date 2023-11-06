import { Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Home from "./views/Home/Home";
import Carrito from "./views/Carrito/Carrito";
import SearchedProducts from "./views/SearchedProducts/SearchedProducts";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/searched-products" element={<SearchedProducts />} />
    </Routes>
  );
}

export default App;
