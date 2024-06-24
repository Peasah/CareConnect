import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container d-flex " >
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: CareConnect@gmail.com</p>
      </div>
      <div className="footer-section">
        <h4>Services</h4>
        <ul>
          <li><a href="/service1">Donation Services</a></li>
          <li><a href="/service2">Request Services</a></li>
          <li><a href="/service3">Fundraising Services</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h6>Copyright © 2024 CareConnect. All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
