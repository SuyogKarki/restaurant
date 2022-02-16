import React from 'react';
import { SubHeading } from '..';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='NewsLetter' />
      <h1 className='headtext__cormorant'>Subscribe to our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your email address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
