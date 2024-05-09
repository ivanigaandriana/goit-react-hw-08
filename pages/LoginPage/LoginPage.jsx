import LoginForm from "../../src/components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";
const LoginPage = () => {
    return (
        <div className={css.loginContainer}>
        <h2 className={css.title}>Login user</h2>
        <LoginForm/>
      </div>
    )
}
export default LoginPage;