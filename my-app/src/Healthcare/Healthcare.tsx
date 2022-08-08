import React from 'react';
import './Healthcare.css';
import HeaderImg from './Imghealth.png';

function Healthcare() {
  return (
    <div className="Healthcare">
      <div className='HealthHeader'>
        <div className='Health-content'>
          <p className='Welcome-text'><hr className='line' />Welcome to Oval Healthcare Center. First in Care, Research and Learning.</p>
          <h1 className='Introduction-text'>We Provide a Smart and Modern leading healthcare for people worldwide</h1>
          <a className='Button-book' href="#">Book Appointment</a>
          <a className='Button-find' href="#">Find a Clinic</a>
        </div>
        <a className='News-link' href="#"><span className='News'>NEWS</span>COVID-19 Community Testing Sites Now Open</a>
        <img className='Header-img' src={HeaderImg} alt="showcase" />
      </div>
    </div>
  );
}

export default Healthcare;
