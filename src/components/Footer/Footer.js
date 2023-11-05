import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-blue'>
      <div className = "container py-4 text-center">
        <div className='sub-cnt1 flex justify-between py-4'>
          <div className='footer-cnt-box1 flex text-white fw-3 fs-14'>
            <div className='about-box flex flex-column'>
              <h5 className='box-title'>ABOUT</h5>
              <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>WholeSale</li>
                <li>COrporate Information</li>
              </ul>
            </div>

            <div className='help-box flex flex-column'>
              <h5 className='box-title'>HELP</h5>
              <ul>
                <li>Payments</li>
                <li>Shipping</li>
                <li>Cancellation & Returns</li>
                <li>FAQ</li>
                <li>Report Infringement</li>
              </ul>
            </div>

            <div className='policy-box flex flex-column'>
              <h5 className='box-title'>CONSUMER POLICY</h5>
              <ul>
                <li>Return Policy</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Sitemap</li>
              </ul>
            </div>

            <div className='social-box flex flex-column'>
              <h5 className='box-title'>SOCIAL</h5>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className='footer-cnt-box2 flex text-white fw-3 fs-14'>
            <div className='mail-box flex flex-column'>
              <h5 className='box-title'>Mail Us</h5>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor eros sit amet eleifend sodales. Suspendisse malesuada erat erat, et scelerisque erat molestie nec.</li>
              </ul>
            </div>

            <div className='address-box flex flex-column'>
              <h5 className='box-title'>Registered Office Address</h5>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor eros sit amet eleifend sodales. Suspendisse malesuada erat erat, et scelerisque erat molestie nec. Nam tortor tellus, rutrum vitae eleifend eget, finibus sed nunc. Cras nec neque accumsan, eleifend ligula eu, gravida libero. Nunc at suscipit eros.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-link-box flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/">
            <i className='mx-2 fa fa-briefcase'></i>
            Become a Seller
          </Link>
          <Link to = "/">
            <i className='mx-2 fab fa-facebook'></i>
            Advertise
          </Link>
          <Link to = "/">
            <i className='mx-2 fa fa-gift'></i>
            Gift Cards
          </Link>
          <Link to = "/">
            <i className='mx-2 fa fa-question-circle'></i>
            Help Center
          </Link>
          <span className='text-white copyright-text text-manrope'>&copy; 2023 eBuy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer