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



const Header = () => {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (location.pathname === '/Game' || location.pathname === '/Quiz' || location.pathname === '/questions/level2Questions' || location.pathname === '/questions/level1Questions' || location.pathname === '/questions/level3Questions' || location.pathname === '/questions/level4Questions' || location.pathname === '/questions/level5Questions' || location.pathname === '/questions/level6Questions') { 
      localStorage.setItem('hideHeader', 'true');
      setHideHeader(true);
    } else {
      localStorage.setItem('hideHeader', 'false');
      setHideHeader(false);
    }
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
        <p>АРина</p>
      </div>
    </header>
  );
};

export default function App() {
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
