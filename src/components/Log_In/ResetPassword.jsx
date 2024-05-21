import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import classes from "./ResetPassword.module.css";

const ResetPassword = () => {
  const navigateTo = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetted, setResetted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(token, password, confirmPassword);
    try {
      const response = await axios.post(
        "http://localhost:5151/auth/reset-password",
        {
          token,
          password,
          confirmPassword,
        }
      );

      if (response.status === 200) {
        setErrorMessage("");
        setResetted(true);
      } else {
        setErrorMessage("Password not changed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
          setErrorMessage("Ошибка при смене пароля");
      }
      if (error.response && error.response.status === 404) {
        setErrorMessage(
          "Такой ссылки не существует, или пользователь уже восстановил пароль"
        );
      }
      if (error.response && error.response.status === 403) {
        setErrorMessage("Срок дейтсвия ссылки истек или не существует");
      }
    }
  };
  if (resetted) {
    return (
      <div className={classes.str1}>
        <div className={classes.main}>
          <div className={classes.login}>
            <h2 className={classes.heading}>Пароль успешно изменен</h2>
            <button className={classes.but} onClick={() => navigateTo("/Log_In")}>Вход</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.str1}>
        <div className={classes.main}>
          <div className={classes.login}>
            <h2 className={classes.heading}>Изменение пароля</h2>
            <form onSubmit={handleSubmit} className={classes.loginForm}>
              <input
                className={classes.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите новый пароль"
              />
              <input
                className={classes.input}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Подтвердите новый пароль"
              />
              {errorMessage && (
                <p className={classes.error__message}>{errorMessage}</p>
              )}
              <button className={classes.but} type="submit">
                Изменить пароль
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default ResetPassword;
