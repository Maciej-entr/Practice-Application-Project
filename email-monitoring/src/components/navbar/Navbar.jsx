import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/logo.png';

const Navbar = ({ setShowLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className='a' onClick={toggleMenu}>Home</Link>
        <Link to="/license" className='a' onClick={toggleMenu}>License</Link>
        <Link to="/contact" className='a' onClick={toggleMenu}>Contact</Link>
        <Link to="/download" className='a' onClick={toggleMenu}>Download</Link>
        <button onClick={() => { setShowLogin(true); toggleMenu(); }}>LogIn</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;