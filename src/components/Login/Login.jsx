import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const navigate = useNavigate();
  const toRegister=()=>{
    navigate("/register")
  }
  const goHome=()=>{
    navigate("/")
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.header}>
          <p className={styles.marca}>Sabores y cafe</p>
          <div onClick={toRegister} className={styles.divRegisterButton}>
              <button className={styles.registerButton}>Unete Ahora</button>
          </div>
      </div>
      <div className={styles.home}>
        <div className={styles.divImage}>
          <img
            className={styles.image}
            src="\src\assets\coffee-2306471_1280.jpg"
            alt="Problemas al cargar la imagen"
          />
        </div>
        <div className={styles.divForm}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.loginText}>Login</h3>
            <input className={styles.inputForm} placeholder="Email adress"{...register("email", { required: true})}/>
            <input className={styles.inputForm} placeholder="Password"{...register("password")} />
            <div className={styles.loginFooter}>
                <div>
                <input type="checkbox" id="miCheckbox" />
                <label className={styles.labelCheckbox} htmlFor="miCheckbox">Recordar mis credenciales</label>
                </div>
                <button className={styles.labelCheckbox}>Olvidaste tu constraseña?</button>
            </div>
            <div className={styles.divButton}>
                <button className={styles.loginButton} onClick={goHome} type="submit">Login</button>
            </div>
          </form>
          </div>
      </div>
    </div>
  );
};
export default Login;
