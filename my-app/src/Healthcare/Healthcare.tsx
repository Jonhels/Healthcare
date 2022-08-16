import React from 'react';
import './Healthcare.css';
import HeaderImg from './Imghealth.png';

function Healthcare() {
  return (
    <div className="Healthcare">
      <div className='HealthHeader'>
        <div className='Health-content'>
          <p><hr className='line'></hr>Welcome to Oval Healthcare Center. First in Care, Research and Learning.</p>
          <h1>We Provide a Smart and Modern leading healthcare for people worldwide</h1>
          <div className='Buttons-wrapper'>
            <a className='Button-book' href="#"><p>Book Appointment</p></a>
            <a className='Button-find' href="#">Find a Clinic</a>
          </div>
        </div>
        <a className='News-link' href="#"><span className='News'>NEWS</span>COVID-19 Community Testing Sites Now Open</a>
        <img className='Header-img' src={HeaderImg} alt="showcase" />
      </div>
    </div>
  );
}

export default Healthcare;
