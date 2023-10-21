import { useNavigate } from "react-router-dom";
import { IoCartSharp } from 'react-icons/io5';

const NavBar=({setImagenSeleccionada})=>{
    const navigate = useNavigate()
    const goToCart=()=>{
        navigate("/carrito")
    }
    const renderContent=(event)=>{
        const value=event.target.value
        setImagenSeleccionada(value)
    }
    return(
        <div className="flex w-full p-3 justify-around bg-orange-300">
            <button value="imgCarta" onClick={renderContent} className="text-lg font-bold tracking-tight text-gray-900">Carta</button>
            <button value="imgFrases" onClick={renderContent} className="text-lg font-bold tracking-tight text-gray-900">Comparte una frase</button>
            <button value="imgMerch" onClick={renderContent} className="text-lg font-bold tracking-tight text-gray-900">Merchandising</button>
            <button onClick={goToCart} className="text-lg font-bold tracking-tight text-gray-900 flex flex-row items-center justify-center"><IoCartSharp/>Carrito</button>
        </div>
    )
}
export default NavBar