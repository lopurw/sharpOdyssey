import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./ForgotPassword.module.css";

const ForgotPaddword = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState(""); // Устанавливаем значение true, чтобы отобразить форму

  const sendLetter = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5177/api/auth/forgot-password?email=${email}`
      );
      const data = response.data;
      const status = response.status;

      if (status === 200) {
        setMessage(data.message);
        console.log(data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        const errors = error.response.data;
        if (errors.message != null) setErrorMessage(errors.message);
      }
      if (error.response && error.response.status === 400) {
        const errors = error.response.data;
        if (errors.message != null) setErrorMessage(errors.message);
      }
    }
  };
  if (message) {
    return (
      <div className={classes.str1}>
        <div className={classes.main}>
          <div className={classes.login}>
            <form className={classes.loginForm}>
              <h2 className={classes.heading}>{message}</h2>
              <button className={classes.but} onClick={() => navigateTo("/Log_In")}>Вход</button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.str1}>
        <div className={classes.main}>
          <div className={classes.login}>
            <form className={classes.loginForm}>
            <h2 className={classes.heading}>Восстановление пароля</h2>
            <input
            className={classes.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите свой email"
            />
            {errorMessage && (
              <p className={classes.error__message}>{errorMessage}</p>
            )}
            <button onClick={sendLetter} className={classes.but} >
              Отправить письмо
            </button>{" "}
            <br />
            <button
              className={classes.but} 
              onClick={() => navigateTo("/Log_In")}
            >
              Вход
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
  

export default ForgotPaddword;
