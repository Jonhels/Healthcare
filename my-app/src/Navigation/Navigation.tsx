import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Navigation.css';
import Oval from './Oval.svg';

function Navigation() {
  return (
    <div className='wrapper'>
    <div className="Navigation">
      <Link to="/">
        <div className='logo-wrapper'>
          <p className='logo-svg'><img src={Oval} alt="Oval" /></p>
          <div className='logo-text'>
            <p>Smart</p>
            <p>Healthcare</p>
          </div>
        </div>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/patient-information">Patient Information</Link>
      <Link to="/events">Events</Link>
      <Link to="/refferrals">Refferrals</Link>
      <Link to="/contact">Contact</Link>
    </div>
    </div>
  );
}

export default Navigation;
