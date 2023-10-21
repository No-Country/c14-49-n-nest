import { useSelector, useDispatch } from "react-redux";
import { getCart, setCart, setRemoveCart } from "../Redux/sliceCart";
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const router = (event) => {
    const value = event.target.value
    navigate(`/${value}`);
  };

  const [total, setTotal] = useState(0);
  const [cartChangeFlag, setCartChangeFlag] = useState(false);

  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      newTotal += parseFloat(cart[i].price.replace("$", "")) * cart[i].quantity;
    }
    setTotal(newTotal);
  }, [cartChangeFlag])
  const addCart = (id) => {
    dispatch(setCart(id)); 
    setCartChangeFlag(!cartChangeFlag)
  };
  const removeCart = (id) => {
    dispatch(setRemoveCart(id));
    setCartChangeFlag(!cartChangeFlag)
  };

  return (
    <div className="w-full h-full min-h-screen bg-orange-200 flex flex-col justify-center items-center">
     <div className="w-full h-[10vh] flex flex-row justify-between bg-orange-300">
        <button value=" " onClick={router} className="self-center bg-orange-200 p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-orange-100 ">Volver al Inicio</button>
        <p className="text-4xl font-jacques-francois-shadow self-center">Carrito</p>
        <div className="w-auto flex flex-row self-center mr-5 items-center justify-center">
          <button value="login" className="bg-orange-200 w-auto m-2 font-inter rounded-lg p-2 hover:bg-orange-100" onClick={router}>Iniciar Sesion</button>
          <button value="register" className="bg-orange-200 w-auto m-2 font-inter rounded-lg p-2 hover:bg-orange-100" onClick={router}>Unete Ahora</button> 
        </div>
      </div>
      <div className="flex w-full min-h-[90vh] h-full">
      
      <div className="w-2/3 h-full flex flex-wrap justify-center items-center">
        {cart.map((product) => (
          <div className="m-2 flex w-96 justify-center items-center bg-gray-300 h-72" key={product.id}>
            <div className="w-1/2 flex flex-col items-center p-3">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <div className="flex p-3">
                <button onClick={() => addCart(product.id)} className="p-1">+</button>
                <button onClick={() => removeCart(product.id)} className="p-1">-</button>
              </div>
              <p>Cantidad: {product.quantity}</p>
            </div>
            <div className="w-1/2 flex bg-gray-200 h-full">
              <img src={product.imageSrc} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center bg-orange-100">
        <div className="w-1/2 bg-orange-200 flex flex-col items-center justify-center rounded-xl">
        <p className="mt-2">Total: ${total.toFixed(2)}</p>
        <button className="bg-orange-300 p-2 mb-2 rounded-lg hover:bg-orange-100">Confirmar compra</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Carrito;
