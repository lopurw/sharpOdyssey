import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import Tooltip from "@mui/material/Tooltip";
import Gal from "./gal.png";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

export default function Log_In({setIsAuthenticated}) {
  const [showModal, setShowModal] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  let isOk;
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [redirectTo, setRedirectTo] = useState(null);
  const [jwtToken, setJwtToken] = useState("");

  useEffect(() => {
    if (redirectTo) {
      window.location.href = redirectTo;
    }
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setJwtToken(storedToken);
    }
  }, [redirectTo]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5151/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        setJwtToken(data.token);
        localStorage.setItem("jwtToken", data.token);
        console.log(data.token);
        setIsAuthenticated(true);
        document.cookie = `cook=${data.token}; path=/`;
        console.log("Registration Success");
        // setRedirectTo("/page1");
        setIsLogged(true);
        setShowModal(true);
      } else {
        console.error("Login Failed");
      }
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div className={classes.str1}>
      <div className={classes.main}>
        <div className={classes.login}>
          <form className={classes.loginForm} onSubmit={handleLogin}>
            <label>ВХОД</label>
            <input
              className={classes.input}
              type="text"
              placeholder="Имя пользователя"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              required
            />
            <input
              className={classes.input}
              type="password"
              placeholder="Пароль"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button className={classes.but} type="submit">
              ВОЙТИ
            </button>
          </form>
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
                  <p>Вы успешно вошли</p>
                  <div>
                    <Link to="/">
                      <button className={classes.button_ok}>Понятно</button>
                    </Link>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
