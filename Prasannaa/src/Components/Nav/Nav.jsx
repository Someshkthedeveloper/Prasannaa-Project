import React, { useState } from 'react';
import './Nav.css';
import Logo from './Logo.png'
import { Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let Nav = useNavigate()
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar__logo" style={{display:"flex",alignItems:"center"}}><img src={Logo} alt="" /></div>

      <ul className={`navbar__links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li onClick={()=>Nav('/')}>Home</li>
        <li onClick={()=>Nav('/Products')}>Products</li>
        <li onClick={()=>Nav('/')}>Contact</li>
      </ul>

      <div className="navbar__toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
