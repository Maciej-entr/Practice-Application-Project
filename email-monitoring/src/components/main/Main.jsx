import React from 'react';
import './Main.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

const Main = () => {
  return (
    <div>
      <div className='section'>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="about-col-1">
                <img src={image1} alt=""/>
              </div>
              <div className="about-col-2">
                <h1 className="subtitle">Benefits of Email Monitoring</h1>
                <p className="about-text">
                  Email monitoring provides deep insights into email communications, helping to reduce stress and improve awareness of potential security threats. It enhances the ability to detect and respond to suspicious activities, ensuring the safety and privacy of your email communications. Users often experience a heightened sense of control and clarity in their email management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section'>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="about-col-2-1">
                <h1 className="subtitle">Why Choose Our Email Monitoring Service?</h1>
                <p className="about-text">
                  Our email monitoring service has been used for years in various security and compliance applications. With the increasing importance of email security, our service provides a reliable solution for monitoring email activities. It helps in identifying potential threats early and ensures compliance with security policies.
                </p>
              </div>
              <div className="about-col-1-2">
                <img src={image2} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className="content-box">
          <h1>Is It Legal and Safe?</h1>
          <p>
            Our email monitoring service is fully compliant with legal and regulatory requirements. It is designed to ensure the safety and privacy of your email communications. By using our service, you can rest assured that your email activities are being monitored in a secure and legal manner.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;