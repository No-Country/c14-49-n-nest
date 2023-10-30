import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ({ setAccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register");
  };
  const onSubmit = async (data) => {
    try {
      const URL = "http://localhost:3001/login";
      const response = await axios.get(
        URL + `?email=${data.email}&password=${data.password}`
      );
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
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col h-full w-full min-h-screen">
      <div className="flex justify-between h-[10vh] p-2 bg-primary-300 items-center">
        <p className="self-center text-5xl font-jacques-francois-shadow mb-3 mt-2 ml-5">Sabores y cafe</p>
        <button
          onClick={toRegister}
          className="self-center bg-primary-100 text-white p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-primary-200 "
        >
          Registrarse
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <img
            className="w-full h-[90vh] object-cover"
            src="\src\assets\coffee-2306471_1280.jpg"
            alt="Problemas al cargar la imagen"
          />
        </div>
        <div className="flex items-center justify-center w-1/2 bg-primary-100">
          <form
            className="bg-primary-300 flex flex-col p-3 w-1/2 rounded-xl shadow-2xl shadow-primary-200 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="self-center text-4xl font-jacques-francois-shadow py-2 mb-5 text-primary-200">
              Login
            </h3>
            <input
              className="my-1 p-1 border-2 border-t-transparent text-primary-200 border-primary-200 bg-transparent border-r-transparent border-l-transparent placeholder:text-primary-100"
              placeholder="Email adress"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600  mx-3">Complete este campo</span>
            )}
            <input
              className="my-1 p-1 border-2 border-t-transparent text-primary-200 border-primary-200 bg-transparent border-r-transparent border-l-transparent placeholder:text-primary-100"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600 mx-3">Complete este campo</span>
            )}
            <div className="flex  justify-between w-full xl:flex xl:justify-between  xl:items-start md:flex-col">
              <div className="xl:w-full mt-2">
                <input type="checkbox" className="mr-1" id="miCheckbox" />
                <label
                  className="hover:text-primary-200 text-primary-200 xl:text-sm"
                  htmlFor="miCheckbox"
                >
                  Recordar mis credenciales
                </label>
              </div>
              <button className="hover:text-red-600 text-primary-200 xl:text-sm xl:mt-3">
                Olvidaste tu constraseña?
              </button>
            </div>
            <div className="flex items-center justify-center w-full mt-5 xl:flex-col md:flex-row">
              <button
                className="bg-primary-100 p-2 rounded-lg  text-primary-300 mb-3 mt-2 ml-5 text-xl hover:bg-primary-200"
                type="submit"
              >
                Iniciar Sesion
              </button>
              <button
                className="p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:text-primary-100 text-primary-200"
                onClick={goHome}
                type="submit"
              >
                Ingresar sin iniciar sesion
              </button>
            </div>
            <div className="flex items-center justify-center w-full"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
