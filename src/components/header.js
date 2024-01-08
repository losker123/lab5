import React from 'react';
import '../styles/Header.css'
import MainPage  from '../pages/MainPage';
import Installations  from '../pages/Installations';
import Questions  from '../pages/Questions';
import Systems  from '../pages/Systems';
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';


const Header=()=>{
    return(
       <>
       <Router>
        <div className="header-container">
            <Link to="/">
            <h1 className="header-title">IsakSystem</h1> 
            </Link>
        
        <ul className="nav-list">
            <li>
                <Link to="/Installations">Установки и обслуживания</Link>
            </li>
            <li>
                <Link to="/Questions">Часто задаваемые вопросы</Link>
            </li>
            <li>
                <Link to="/Systems">Системы</Link>
            </li>
        </ul>
        </div>
        <Routes>
           <Route path="/" element={<MainPage />} />
           <Route path="/Installations" element={<Installations />} />
           <Route path="/Questions" element={<Questions />} />
           <Route path="/Systems" element={<Systems />} />
        </Routes>
       </Router>
        
       </> 
    )
}
export default Header;

