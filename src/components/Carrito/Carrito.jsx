import { useSelector, useDispatch } from "react-redux";
import { getCart, setCart, setRemoveCart } from "../Redux/sliceCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Carrito = ({ access, setAccess }) => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const router = (event) => {
    const value = event.target.value;
    navigate(`/${value}`);
  };
  const [total, setTotal] = useState(0);
  const [cartChangeFlag, setCartChangeFlag] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    let newCantidad = 0;
    for (let i = 0; i < cart.length; i++) {
      newTotal += cart[i].price * cart[i].quantity;
      newCantidad += cart[i].quantity;
    }
    setTotal(newTotal);
    setCantidad(newCantidad);
  }, [cartChangeFlag]);
  const addCart = (id) => {
    dispatch(setCart(id));
    setCartChangeFlag(!cartChangeFlag);
  };
  const removeCart = (id) => {
    dispatch(setRemoveCart(id));
    setCartChangeFlag(!cartChangeFlag);
  };
  if (cart.length === 0) {
    navigate("/");
  }
  console.log(cart);
  const logout = () => {
    setAccess(false);
    navigate("/login");
  };
  return (
    <div className="w-full h-full min-h-screen bg-primary-400 flex flex-col justify-center items-center">
      <div className="w-full h-[10vh] flex flex-row justify-between bg-primary-100">
        <button
          value=" "
          onClick={router}
          className="self-center bg-orange-200 p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-orange-100 "
        >
          Volver al Inicio
        </button>
        <p className="text-4xl font-jacques-francois-shadow self-center text-primary-300">
          Carrito
        </p>
        <div className="w-auto flex flex-row self-center mr-5 items-center justify-center">
          {access ? (
            <button
              className="bg-orange-200 w-auto m-2 font-inter rounded-lg p-2 hover-bg-orange-300"
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          ) : (
            <>
              <button
                className="bg-orange-200 w-auto m-2 font-inter rounded-lg p-2 hover-bg-orange-300"
                onClick={router}
              >
                Iniciar Sesión
              </button>
              <button
                className="bg-orange-200 w-auto m-2 font-inter rounded-lg p-2 hover-bg-orange-300"
                onClick={router}
              >
                Únete Ahora
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex w-full min-h-[90vh] h-full">
        <div className="w-2/3 h-full flex flex-wrap justify-center items-center">
          {cart.map((product) => (
            <div
              className="m-2 flex w-96 justify-center items-center bg-primary-100 h-64"
              key={product.id}
            >
              <div className="w-6/12 flex flex-col items-center p-3">
                <p className="text-xl text-primary-300">{product.name}</p>
                <p className="text-primary-300">${product.price}</p>
                <div className="flex p-3 mx-1">
                  <button
                    onClick={() => addCart(product.id)}
                    className="py-1 px-2 m-1 bg-orange-200 rounded-full hover:bg-orange-100"
                  >
                    Agregar
                  </button>
                  <button
                    onClick={() => removeCart(product.id)}
                    className="py-1 px-2 m-1 bg-orange-200 rounded-full hover:bg-orange-100"
                  >
                    Eliminar
                  </button>
                </div>
                <p className="text-primary-300">Cantidad: {product.quantity}</p>
              </div>
              <div className="w-6/12 flex bg-gray-200 h-full">
                <img
                  className="w-full h-full object-cover"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center bg-primary-200">
          <div className="w-1/2 bg-primary-500 flex flex-col items-start py-5 justify-center rounded-xl">
            <div className="flex justify-between w-full my-1">
              <p className="px-2  text-primary-300">Productos ({cantidad})</p>
              <p className="mr-3  text-primary-300">${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="px-2  text-primary-300">Envio:</p>
              <p className="mr-3  text-primary-300 ">Gratis</p>
            </div>
            <div className="flex justify-between w-full text-primary-300 my-2">
              <p className="px-2 text-primary-300">Total:</p>
              <p className="mr-3  text-primary-300"> ${total.toFixed(2)}</p>
            </div>
            <button className="bg-primary-400 p-1 m-2 rounded-lg w-[90%] self-center hover:bg-orange-100">
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
