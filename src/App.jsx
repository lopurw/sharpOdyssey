import React, { useState, useEffect } from "react";
import Log_In from "./components/Log_In/Log_In";
import Game from "./components/Game/Game";
import "./components/Game/Game.module.css";
import Page1 from "./components/Page1/Page1";
import SignUp from "./components/SignUp/SignUp";
import "./components/Header/Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ButtonNav from "./components/ButtonNuv/ButtonNav";
import "./index.css";
import Questions from "./components/Game/quiz/questions";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";
import ProfImg from "./user.jpg";
import {useNavigate} from "react-router-dom";
import ForgotPaddword from "./components/Log_In/ForgotPaddword";
import ResetPassword from "./components/Log_In/ResetPassword";
import Daily_Reward from "./components/Game/Daily_Reward";


const Header = ({isAuthenticated, setIsAuthenticated}) => {
  const [profileImage, setProfileImage] = useState(""); // Сначала устанавливаем пустую строку
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleAboutClick = () => {
    scrollToSection2();
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleImageClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageDataUrl = event.target.result;
          setProfileImage(imageDataUrl); // Устанавливаем изображение из проводника
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  };

  useEffect(() => {
    if (
      location.pathname === "/Game" ||
      location.pathname === "/Quiz" ||
      location.pathname === "/questions/level2" ||
      location.pathname === "/questions/level1" ||
      location.pathname === "/questions/level3" ||
      location.pathname === "/questions/level4" ||
      location.pathname === "/questions/level5" ||
      location.pathname === "/questions/level6"
    ) {
      localStorage.setItem("hideHeader", "true");
      setHideHeader(true);
    } else {
      localStorage.setItem("hideHeader", "false");
      setHideHeader(false);
    }
    axios
      .get("http://localhost:5151/auth/user", {
        withCredentials: true,
      })
      .then((response) => {
        setUserName(response.data.userName);
        setIsAuthenticated(true);
        if (!response.data.profileImage) {
          setIsAuthenticated(true);
          // Если у пользователя нет фото профиля
          setProfileImage(ProfImg); // Устанавливаем фото по умолчанию
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [location]);

  if (hideHeader) {
    return null;
  }
  const handleLogout = () => {
    document.cookie = 'cook=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setUserName("");
    setProfileImage(ProfImg)
    setIsAuthenticated(false)
    navigate('/SignUp');
  };

  return (
    <header className="header">
      <img src="src\image 2.png" className="logo" title="Изменить фото" />

      <nav className="navbar">
        <Link to="/">
          <ButtonNav>Главная</ButtonNav>
        </Link>
        <Link to="/#about" onClick={handleAboutClick}>
          <ButtonNav>О нас</ButtonNav>
        </Link>
        <Link to="/Game">
          <ButtonNav> Обучение</ButtonNav>
        </Link>
      </nav>
      {isAuthenticated &&
      <div className="prof">
        <Tooltip title="Изменить фото" placement="top">
          <img
            src={profileImage}
            alt=""
            onClick={handleImageClick}
            style={{ borderRadius: "50%" }}
          />
        </Tooltip>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p>{userName}</p>
          {isHovering && <button onClick={handleLogout}>Выйти</button>}
        </div>
      </div>
    }
    </header>
  );
};

export default function App({ score }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Router>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Log_In" element={<Log_In setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/ForgotPasword" element= {<ForgotPaddword/>}/>
          <Route path="/questions/:name" element={<Questions />} />
          <Route path="/ResetPassword/:token" element={<ResetPassword />} />
          <Route path="/Daily_Reward" element={<Daily_Reward />} />
        </Routes>
        
      </Router>
    </>
  );
}
