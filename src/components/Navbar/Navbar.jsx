import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/DSCUWM_Logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className='nav-section'>
        <a href='#' className='logo'>
          <img src={logo} alt='DSC Logo' />
        </a>
        <nav className='navbar'>
          <ul className='nav-list'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Activities</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
