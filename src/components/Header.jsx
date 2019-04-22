import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';
import LogoWithName from '../assets/images/logo-with-name.png';

function Header(){
  return (
    <div className='header'>
      <img src={LogoWithName}></img>
      <p id='sensor'>Sensor Network</p>
      <p id='maps'>Maps & Radar</p>
      <p id='severe'>Severe Weather</p>
      <p id='news'>News & Blogs</p>
      <p id='mobile'>Mobile Apps</p>
      <p id='more'>More</p>
      <input type='text' class='location-bar' placeholder='Search Locations'/>
      <p className='membership'>Log In</p>
      <p className='membership'>Join</p>
    </div>
  );
}

export default Header;
