import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import axios from "axios"
const Login = ({ setAccess }) => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const navigate = useNavigate();
  const toRegister=()=>{
    navigate("/register")
  }
  const onSubmit = async (data) => {
    try {
      const URL = 'http://localhost:3001/login';
      const response = await axios.get(URL + `?email=${data.email}&password=${data.password}`);
      const userData = response.data;
      if (userData) {
        setAccess(true);
        navigate("/");
      } else {
        console.log("Error de autenticación");
      }
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };
  const goHome=()=>{
    navigate('/')
  }
  return (
    <div className="flex flex-col h-full w-full min-h-screen">
      <div className='flex justify-between h-[10vh] p-2 bg-orange-300 items-center'>
          <p className='text-4xl font-jacques-francois-shadow self-center'>Sabores y cafe</p>
          <button  onClick={toRegister} className='self-center bg-orange-200 p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-orange-100 '>Registrarse</button>
      </div>
      <div className='flex'>
        <div className='w-1/2'>
          <img
            className='w-full h-[90vh] object-cover'
            src="\src\assets\coffee-2306471_1280.jpg"
            alt="Problemas al cargar la imagen"
          />
        </div>
        <div className='flex items-center justify-center w-1/2 bg-orange-100'>
          <form className='bg-black flex flex-col p-3 w-1/2 rounded-xl shadow-2xl shadow-amber-300 ' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='self-center text-4xl font-jacques-francois-shadow py-2 mb-5 text-white'>Login</h3>
            <input className='my-1 p-1 border-2 border-t-transparent text-white border-white bg-transparent border-r-transparent border-l-transparent placeholder:text-gray-700' placeholder="Email adress"{...register("email", { required: true})}/>
            {errors.email && <span  className="text-red-800 mx-3">Complete el campo</span>}
            <input className='my-1 p-1 border-2 border-t-transparent text-white border-white bg-transparent border-r-transparent border-l-transparent placeholder:text-gray-700' placeholder="Password"{...register("password",{ required: true})} />
            {errors.password && <span  className="text-red-800 mx-3">Complete el campo</span>}
            <div className='flex  justify-between w-full xl:flex-col  xl:items-start'>
                <div className="xl:w-full">
                <input type="checkbox" className="mr-1" id="miCheckbox" />
                <label className='hover:text-orange-500 text-white xl:text-sm' htmlFor="miCheckbox">Recordar mis credenciales</label>
                </div>
                <button className='hover:text-orange-500 text-white xl:text-sm xl:mt-3'>Olvidaste tu constraseña?</button>
            </div>
            <div className='flex items-center justify-center w-full mt-5 xl:flex-col md:flex-row'>
                <button className=' bg-orange-500 p-2 rounded-lg  text-white mb-3 mt-2 ml-5 text-xl hover:bg-orange-400 ' type="submit">Iniciar Sesion</button>
                <p className='p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:text-orange-400 text-white' onClick={goHome} type="submit">Ingresar sin iniciar sesion</p>
            </div>
            <div className='flex items-center justify-center w-full'>
            </div>
          </form>
          </div>
      </div>
    </div>
  );
};
export default Login;
