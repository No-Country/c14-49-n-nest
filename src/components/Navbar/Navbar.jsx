import { useNavigate } from "react-router-dom";
import { IoCartSharp } from 'react-icons/io5';

const NavBar=()=>{
    const navigate = useNavigate()
    const goToCart=()=>{
        navigate("/carrito")
    }
    return(
        <div className="flex w-full p-3 justify-around bg-orange-300">
            <button className="text-lg font-bold tracking-tight text-gray-900">Carta</button>
            <p className="text-lg font-bold tracking-tight text-gray-900">Delivery</p>
            <button className="text-lg font-bold tracking-tight text-gray-900">Merchandising</button>
            <button onClick={goToCart} className="text-lg font-bold tracking-tight text-gray-900 flex flex-row items-center justify-center"><IoCartSharp/>Carrito</button>
        </div>
    )
}
export default NavBar