import { useNavigate } from "react-router-dom";

export default function UserNoRegisted() {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      {" "}
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
    </div>
  );
}
