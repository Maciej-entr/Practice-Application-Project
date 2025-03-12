import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/download');
  };

  return (
    <div>
      <div className="main">
        <div className='header'>
          <div className="header-contents">
            <h2>Do you want to automate your email inbox?</h2>
            <button onClick={handleButtonClick}>Check it out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;