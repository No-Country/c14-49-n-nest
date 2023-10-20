import { useSelector, useDispatch } from "react-redux";
import { getCart, setCart, setRemoveCart } from "../Redux/sliceCart";

const Carrito = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const groupedCart = {};
  console.log(groupedCart)
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += parseFloat(cart[i].price.replace("$", ""));
  }
  cart.forEach((product) => {
    if (groupedCart[product.id]) {
      groupedCart[product.id].quantity += 1;
    } else {
      groupedCart[product.id] = { ...product, quantity: 1 };
    }
  });
  const addCart = (id) => {
    dispatch(setCart(id));
  };
  const removeCart = (id) => {
    dispatch(setRemoveCart(id));
  };
  return (
    <div className="w-full h-screen bg-orange-200 flex justify-center items-center">
      <div className="w-1/2 h-screen flex flex-wrap justify-center items-center">
        {Object.values(groupedCart).map((product) => (
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
      <div className="w-1/2 flex flex-col h-screen bg-orange-300">
        <p>Total: ${total.toFixed(2)}</p>
        
      </div>
      
    </div>
    
  );
};

export default Carrito;
