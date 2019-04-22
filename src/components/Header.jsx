import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Header(){
  return (
    <div>
      <h1 className='bg-grn header'>Help Queue!</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;
