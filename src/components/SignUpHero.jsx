import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function SignUpHero() {
  return(
    <div className='alert-signup'>
      <div className='alert-text'>
        <p>Get Daily Forecasts and Weather Alert by Email!</p>
      </div>
      <div className='subscribe'>
        <button className='button-subscribe' type='button'><a href='https://www.wunderground.com/member/alerts'>Subscribe</a></button>
      </div>
    </div>
  );
}

export default SignUpHero;
