import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import Carta from "../HomeOptions/Carta";
import Cultura from "../HomeOptions/Cultura";
import Merch from "../HomeOptions/Merch";
import { setAllProducts } from "../Redux/sliceCart";
import { useDispatch } from "react-redux";
const Home = ({ access, setAccess }) => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState("imgCarta");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toRegister = () => {
    navigate("/register");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const logout = () => {
    setAccess(false);
    navigate("/login");
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => {
        const products = response.data;
        setAllProducts(products); // Actualiza el estado de los productos
        dispatch(setAllProducts(products));
      })
      .catch((error) => {
        console.error("Error al obtener los Productos", error);
      });
  }, []);
  const imagenes = [
    {
      id: "imgCarta",
      src: "https://cdn.pixabay.com/photo/2016/11/19/12/54/drink-1839134_640.jpg",
      alt: "Carta",
    },
    {
      id: "imgCultura",
      src: "https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_640.jpg",
      alt: "Cultura",
    },
    {
      id: "imgMerch",
      src: "https://cdn.pixabay.com/photo/2017/01/15/18/54/bahamas-1982413_640.jpg",
      alt: "Merch",
    },
  ];
  return (
    <div className="w-full bg-orange-100 h-full min-h-screen flex flex-col">
      <div className="flex justify-between h-[9vh] p-2 bg-primary-300 items-center">
        <p className="self-center font-jacques-francois mb-3 mt-2 ml-5 sm:text-4xl md:text-5xl">
          Sabores y cafe
        </p>
        <div className="w-auto flex flex-row self-center mr-5 items-center justify-center">
          {access ? (
            <button
              className="self-center bg-primary-100 text-white p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-primary-200 "
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          ) : (
            <>
              <button
                className="self-center bg-primary-100 text-white p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-primary-200 "
                onClick={goToLogin}
              >
                Iniciar Sesión
              </button>
              <button
                className="self-center bg-primary-100 text-white p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-primary-200 "
                onClick={toRegister}
              >
                Únete Ahora
              </button>
            </>
          )}
        </div>
      </div>
      <NavBar setImagenSeleccionada={setImagenSeleccionada} />
      <div className="w-full h-96 relative">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312_640.jpg"
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/4 justify-center items-center">
          {imagenes.map((imagen) => (
            <div
              key={imagen.id}
              className={`h-3/4 w-3/4 rounded-2xl m-2 hover:h-[96%] hover:w-[96%] ${
                imagenSeleccionada === imagen.id
                  ? "border-4 border-orange-500"
                  : ""
              }`}
              onClick={() => setImagenSeleccionada(imagen.id)}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex w-3/4 justify-center items-center bg-primary-400">
          {imagenSeleccionada === "imgCarta" && <Carta />}
          {imagenSeleccionada === "imgCultura" && <Cultura />}
          {imagenSeleccionada === "imgMerch" && <Merch />}
        </div>
      </div>
    </div>
  );
};
export default Home;
