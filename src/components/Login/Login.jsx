import { useForm } from "react-hook-form";
import styles from "./login.module.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.loginContainer}>
      <div className={styles.header}>
          <p className={styles.marca}>Sabores y cafe</p>
          <div className={styles.divRegisterButton}>
          <button className={styles.registerButton}>Unete Ahora</button>
          </div>
      </div>
      <div className={styles.home}>
        <div className={styles.divImage}>
          <img
            className={styles.image}
            src="https://ingenieriademenu.com/wp-content/uploads/2022/04/Como-decorar-una-cafeteria-pequena-con-poco-dinero.jpg"
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
                <p className={styles.labelCheckbox}>Olvidaste tu constraseña?</p>
            </div>
            <div className={styles.divButton}>
                <button className={styles.loginButton} type="submit">Login</button>
            </div>
          </form>
          </div>
      </div>
    </div>
  );
};
export default Login;
