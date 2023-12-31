import { useNavigate } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getCart } from "../Redux/sliceCart";
import toast from "react-hot-toast";

const NavBar = ({ setImagenSeleccionada }) => {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const goToCart = () => {
    if (cart.length > 0) {
      navigate("/carrito");
    } else toast.error("El carrito esta vacio");
  };
  const renderContent = (event) => {
    const value = event.target.value;
    setImagenSeleccionada(value);
  };
  return (
    <div className="flex w-full p-3 justify-around bg-primary-100 h-[6vh] items-center">
      <button
        value="imgCarta"
        onClick={renderContent}
        className="text-lg font-bold tracking-tight text-primary-300 hover:text-primary-400"
      >
        Carta
      </button>
      <button
        value="imgMerch"
        onClick={renderContent}
        className="text-lg font-bold tracking-tight text-primary-300 hover:text-primary-400"
      >
        Merchandising
      </button>
      <button
        onClick={goToCart}
        className="text-lg font-bold tracking-tight text-primary-300 flex flex-row items-center justify-center hover:text-primary-400"
      >
        <IoCartSharp />
        Carrito
      </button>
    </div>
  );
};
export default NavBar;
