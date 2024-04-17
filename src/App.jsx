import React, { useState, useEffect } from 'react';
import Log_In from './components/Log_In/Log_In';
import Game from './components/Game/Game';
import './components/Game/Game.module.css';
import Page1 from './components/Page1/Page1';
import SignUp from './components/SignUp/SignUp';
import './components/Header/Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonNav from './components/ButtonNuv/ButtonNav';
import './index.css'
import Questions from './components/Game/quiz/questions';
import { useLocation } from 'react-router-dom';
import axios from "axios";



const Header = () => {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (location.pathname === '/Game' || location.pathname === '/Quiz' || location.pathname === '/questions/level2' || location.pathname === '/questions/level1' || location.pathname === '/questions/level3' || location.pathname === '/questions/level4' || location.pathname === '/questions/level5' || location.pathname === '/questions/level6') { 
      localStorage.setItem('hideHeader', 'true');
      setHideHeader(true);
    } else {
      localStorage.setItem('hideHeader', 'false');
      setHideHeader(false);
    }
    axios.get('http://localhost:5151/auth/user', {
      withCredentials: true
    })
        .then(response => {
          setUserName(response.data.userName)// Выводим данные пользователя в консоль
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
  }, [location]);

  if (hideHeader) {
    return null;
  }

  return (
    <header className="header">
      <img src="src\image 2.png" className="logo" />
      <nav className="navbar">
        <Link to="/">
          <ButtonNav>Главная</ButtonNav>
        </Link>
        <Link to="/SignUp">
          <ButtonNav> О нас</ButtonNav>
        </Link>
        <Link to="/Game">
          <ButtonNav> Обучение</ButtonNav>
        </Link>
      </nav>
      <div className="prof">
        <img src="src\round-image.png" alt="" />
        <p>{userName}</p>
      </div>
    </header>
  );
};

export default function App({score}) {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Log_In" element={<Log_In />} />
          <Route path="/Game" element={<Game />} />
          
          
          
          <Route path="/questions/:name" element={<Questions />} />
          
          
        </Routes>
      </Router>
    </>
    
  );
  
}
