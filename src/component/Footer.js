import React from 'react';
import './nav.css'

const Footer = () => {
  return (
    <div className="footer-container d-flex justify-content-between align-items-center px-5 py-3 color-white" >
      <div className="footer-section text-center">
        <h4>Contact Us</h4>
        <p>Email: CareConnect@gmail.com</p>
      </div>
      <div className="footer-section">
        <h6>Copyright © 2024 CareConnect. All rights reserved.</h6>
      </div>
      <div className="footer-section text-center">
        <h4>Services</h4>
        <ul className='d-flex list-unstyled '>
          <li className='px-2'><a className='text-decoration-none text-dark' href="/service1">Donation Services</a></li>
          <li className='px-2'><a className='text-decoration-none text-dark' href="/service2">Request Services</a></li>
          <li><a className='text-decoration-none text-dark' href="/service3">Fundraising Services</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
