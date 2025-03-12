import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/logo.png';

const Navbar = ({setShowLogin}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className='a'>Home</Link>
        <Link to="/license" className='a'>License</Link>
        <Link to="/contact" className='a'>Contact</Link>
        <Link to="/download" className='a'>Download</Link>
      </div>
      <button onClick={()=>{setShowLogin(true)}}>LogIn</button>
    </nav>
  );
};

export default Navbar;