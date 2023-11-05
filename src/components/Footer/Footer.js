import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-orange'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase'>Privacy Policy</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>term of service</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>About SnapUp.</Link>
        </div>
        <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
          <div className='header-cnt-top-l'>
            <ul className='flex top-links align-center'>
              <li>
                <Link to = "/seller">Seller Center</Link>
              </li>
              <li className='vert-line'></li>
              <li>
                <Link to = "/download">Download</Link>
              </li>
              <li className='vert-line'></li>
              <li className='flex align-center'>
                <span className='fs-13'>Follow us on</span>
                <ul className='social-links flex align-center'>
                  <li className='mx-2'>
                    <a href = "www.facebook.com" className='fs-15'>
                      <i className='fab fa-facebook'></i>
                    </a>
                  </li>
                  <li className='mx-2'>
                    <a href = "www.instagram.com" className='fs-15'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='header-cnt-top-r'>
            <ul className='top-links flex align-center'>
              <li>
                <Link to = "/" className='top-link-itm'>
                  <span className='top-link-itm-ico mx-2'>
                    <i className='fa-solid fa-circle-question'></i>
                  </span>
                  <span className='top-link-itm-txt'>Support</span>
                </Link>
              </li>
              <li className='vert-line'></li>
              <li>
                <Link to = "/">
                  <span className='top-link-itm-txt'>Register</span>
                </Link>
              </li>
              <li className='vert-line'></li>
              <li>
                <Link to = "/">
                  <span className='top-link-itm-txt'>Log in</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy; 2022 SnapUp. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer