import React from 'react';
import './Healthcare.css';
import HeaderImg from './Imghealth.png';
import Book from  './Book.svg';
import Chat from './Chat.svg';
import Mind from './Mind.svg';

function Healthcare() {
  return (
    <div className="Healthcare">
      <div className='HealthHeader'>
        <div className='Health-content'>
          <p><hr className='line'></hr>Welcome to Oval Healthcare Center. First in Care, Research and Learning.</p>
          <h1>We Provide a Smart and Modern leading healthcare for people worldwide</h1>
          <div className='Buttons-wrapper'>
            <a className='Button-book' href="#"><p>Book Appointment</p></a>
            <a className='Button-find' href="#"><p>Find a Clinic</p></a>
          </div>
        </div>
        <div className='Howto'>
          <p className='Howto-minititle'>SMART & HASSLE-FREE<hr /></p>
          <h1 className='Howto-h1'>A friendlier healthcare experience</h1>
          <div className='Book'>
            <img src={Book} alt="Book" />
            <p>Book an appointments</p>
          </div>
          <div className='Chat'>
            <img src={Book} alt="Chat" />
            <p>Chat with your doc & health team</p>
          </div>
          <div className='Mind'>
            <img src={Mind} alt="Mind" />
            <p>All your health, in one place. Peace of mind.</p>
          </div>
        </div>
        <a className='News-link' href="#"><span className='News'>NEWS</span>COVID-19 Community Testing Sites Now Open</a>
        <img className='Header-img' src={HeaderImg} alt="showcase" />
      </div>
    </div>
  );
}

export default Healthcare;
