import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const goToLogin = () => {
    navigate("/login");
  };
  const onSubmit = async (data) => {
    const termsAccepted = data.termsAccepted;

    if (!termsAccepted) {
      <div>Debes aceptar los términos y condiciones para registrarte.</div>;
      return;
    }

    await axios
      .post("http://localhost:3001/create", data)
      .then(({ data }) => {
        if (data) {
          alert("Usuario creado con éxito");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("Algo falló", error);
      });
  };
  return (
    <div className="w-full bg-primary-100 h-screen flex flex-col">
      <div className="h-[10vh] flex flex-row justify-between">
        <p className="self-center text-5xl font-jacques-francois-shadow text-primary-300 mb-3 mt-2 ml-5">
          Sabores y cafe
        </p>
        <div className="w-auto flex flex-row self-center mr-5 items-center justify-center">
          <p className="text-xs text-primary-300">Ya tienes una cuenta?</p>
          <button
            onClick={goToLogin}
            className="self-center bg-primary-300 text-primary-200 p-2 rounded-lg  mb-3 mt-2 ml-5 text-xl hover:bg-primary-200 hover:text-primary-300"
          >
            Iniciar Sesion
          </button>
        </div>
      </div>
      <div className="h-[90vh] flex flex-row">
        <div className="w-2/5 h-full">
          <img
            src="src\assets\cafe-1869656_1920.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-3/5 bg-primary-300 flex justify-center items-center">
          <form
            className="w-3/5 flex flex-col bg-primary-500 gap-2 rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-center text-primary-300 text-4xl my-5 font-inter">
              Registrarse
            </h3>
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col">
                <input
                  className="m-3 rounded-md p-2"
                  placeholder="Nombre completo"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-800 mx-3">Complete el campo</span>
                )}
                <input
                  className="m-3 rounded-md p-2"
                  placeholder="Numero de telefono"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && (
                  <span className="text-red-800 mx-3">Complete el campo</span>
                )}
                <input
                  type="date"
                  className="m-3 rounded-md p-2"
                  placeholder="Date of Birth"
                  {...register("birthDate", { required: true })}
                />
                {errors.birthDate && (
                  <span className="text-red-800 mx-3">Complete el campo</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  className="m-3 rounded-md p-2"
                  type="email"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-800 mx-3">Complete el campo</span>
                )}
                <input
                  className="m-3 rounded-md p-2"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-800 mx-3">Complete el campo</span>
                )}
                <input
                  className="m-3 rounded-md p-2"
                  placeholder="Confirm password"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-800 mx-3">Complete el campo</span>
                )}
              </div>
            </div>
            <div className="text-center mt-5">
              <input
                type="checkbox"
                id="termsAccepted"
                {...register("termsAccepted")}
              />
              <label
                className="font-inter text-primary-300 text-xl hover:text-primary-200"
                htmlFor="termsAccepted"
              >
                Acepto los términos y condiciones
              </label>
            </div>
            {onSubmit}
            <div className="text-center mt-4">
              <button
                className="w-32 bg-primary-300 rounded-lg text-primary-200 text-xl hover:bg-primary-400 p-3 mx-auto font-inter mb-7"
                type="submit"
              >
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
