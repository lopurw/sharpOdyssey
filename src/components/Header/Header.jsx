// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
// import ButtonNav from './ButtonNav';
// import Page1 from './Page1';
// import SignUp from './SignUp';
// import Log_In from './Log_In';
// import Game from './Game';
// import './Header.css';

// export default function Header() {
//   return (
//     <Router>
//       <header className="header">
//         <img src="src\image 2.png" className='logo'/>
//         <nav className="navbar">
//           <Link to="/"><ButtonNav >Главная</ButtonNav></Link>
//           <Link to="/SignUp"><ButtonNav > О нас</ButtonNav></Link>
//           <Link to="/Game"><ButtonNav > Обучение</ButtonNav></Link>
//         </nav>
//         <div className='prof'>
//           <img src="src\round-image.png" alt=""  /> 
//           <p>АРина</p>
//         </div>
//       </header>
//       <Routes>
//         <Route path="/" element={<OutletHeader />}/>
//         <Route path="/SignUp" element={<SignUp/>}/>
//         <Route path="/Log_In" element={<Log_In/>}/>
//         <Route path="/Game" element={<Game/>}/>
//       </Routes>
//     </Router>
//   )
// }

// function OutletHeader() {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// }
