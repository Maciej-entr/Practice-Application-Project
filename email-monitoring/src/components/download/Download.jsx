import React from 'react';
import './Download.css';
import programFile from '../../assets/Email-Filtering-Program.zip';
import headerImage from '../../assets/Download.jpg';

const Download = () => {
  return (
    <div className="download-section">
      <div className="download-header">
        <img src={headerImage} alt="Header" className="header-image" />
        <div className="header-content">
          <h1>Download Our Email Monitoring Program</h1>
          <p>
            Click the button below to download our email monitoring program. Ensure the security and privacy of your email communications with our reliable software.
          </p>
          <a href={programFile} download="email-monitoring-program.zip" className="download-button">
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;