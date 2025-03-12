import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLicenseClick = () => {
    navigate('/license');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleDownloadClick = () => {
    navigate('/download');
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="Logo" className="logo" />
          <p>
            Our email monitoring program ensures the security and privacy of your email communications. Stay protected with real-time alerts and detailed reports.
          </p>
          <div className="footer-social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={github} alt="GitHub" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/" onClick={handleHomeClick} className="a">Home</a></li>
            <li><a href="/license" onClick={handleLicenseClick} className="a">License</a></li>
            <li><a href="/contact" onClick={handleContactClick} className="a">Contact</a></li>
            <li><a href="/download" onClick={handleDownloadClick} className="a">Download</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li className='contact'>+48 329 239 239</li>
            <li className='contact'>dummyEmailId@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; Email Monitoring Program all rights reserved | Made by Maciej Waszyński
      </p>
    </div>
  );
};

export default Footer;