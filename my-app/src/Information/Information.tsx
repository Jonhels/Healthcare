import React from 'react';
import { Link } from "react-router-dom";
import './Information.css';
import Pin from './Pin.svg';
import Phone from './Phone.svg';
import Heart from './Heart.svg';

function Information() {
  return (
    <div className="Information">
      <a className='map' href={'https://goo.gl/maps/T99Lrc9xEbPrr1QX9'}><img src={Pin} alt="Pin" />123 Anywhere St., Any City, ST 12345</a>
      <a className='phone' href={'tel:+123-456-7890'}><img src={Phone} alt="Phone" />+123-456-7890</a>
      <a className='hour' href={'#'}>Emergency Care <span className='h-Text'>(24hrs)</span></a>
      <a className='donate' href={'#'}><img src={Heart} alt="Heart" />Donate</a>
    </div>
  );
}

export default Information;
