import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id='main--footer'>
      <ul className='main--footer--footerpages'>
        <li>
          <Link to='/' className='footer--links'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects' className='footer--links'>
            projects
          </Link>
        </li>
        <li>
          <a className='footer--links' href='/Cody-Gilliam-Resume.pdf' download>
            Resume
          </a>
        </li>
        <li>
          <Link to='/contact' className='footer--links'>
            Contact Me
          </Link>
        </li>
      </ul>
      <p className='footer--copyright'>
        Portfolio &copy; 2020, All Rights Reserved
      </p>
      <div className='footer--social'>
        <a
          className='footer--social-icon'
          href='https://github.com/codyg7'
          rel='noopener'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          className='footer--social-icon divider'
          href='mailto:gilliamcody71@gmail.com'
          rel='noopener'
        >
          <i className='fas fa-envelope'></i>
        </a>
        <a
          className='footer--social-icon'
          href='https://www.linkedin.com/in/codygilliam1/'
          rel='noopener'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
