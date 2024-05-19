import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

import Gal from "./gal.png";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function SignUp() {
  const [showModal, setShowModal] = useState(false);
  let isOk;
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault(); // prevent the default form submission behavior

    // Validation checks

    try {
      const response = await fetch("http://localhost:5151/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //работа с запросами(fetch или axios )
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        // window.location.href = "/login";
        console.log("Registration Success");
        setShowModal(true);
      } else {
        console.error("Registration Failed");
      }
    } catch (error) {
      console.error("Registration Error", error);
    }
  };

  return (
    <div className={classes.str1}>
      <div className={classes.main}>
        <div className={classes.signup}>
          <form className={classes.signupFrom} onSubmit={handleRegister}>
            <div className={classes.label}>
              <label>РЕГИСТРАЦИЯ</label>
            </div>

            <input
              className={classes.input}
              type="text"
              placeholder="Имя пользователя"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
              required
            />
            <input
              className={classes.input}
              type="email"
              placeholder="Почта"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              required
            />
            <input
              className={classes.input}
              type="password"
              placeholder="Пароль"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              required
            />
            <button className={classes.but} type="submit">
              Зарегистрироваться
            </button>
            <div className={classes.text}>
              <p>Уже есть аккаунт? </p>
              <Link to="/Log_In" className={classes.link}>
                Войти
              </Link>
              
            </div>
          </form>
        </div>
      </div>
      {showModal && (
        <div className={classes.main_modal}>
          <div className={classes.modal}>
            <Modal
              aria-labelledby="start-quiz-modal-title"
              aria-describedby="start-quiz-modal-description"
              BackdropProps={{
                sx: { backdropFilter: "blur(8px)" },
                invisible: true,
              }}
              open={true} // Установка open в true, чтобы модальное окно было всегда отображаемым
            >
              <Box className={classes.box}>
                <img src={Gal} alt="" />
                <div className={classes.p}><p >Вы успешно зарагестрировались</p></div>
                <p>Войдите, чтобы продолжить </p>
                <div>
                  <Link to="/Log_In">
                    <button className={classes.button_ok}>Понятно</button>
                  </Link>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}
