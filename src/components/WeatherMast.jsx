import React from 'react';
// import { Link } from 'react-router-dom';
import City from './City';
import cityList from '../models/cityData.js';
import '../scss/styles.scss';

function WeatherMast() {
  return (
    <div className='favorites-bar'>
      <p id='popular-cities'>Popular Cities</p>
      {cityList.map((city, index) =>
        <City  name={city.name}
          temp={city.temp} 
          link={city.link}
          key={index}
        />  
      )}
    </div>
  );
}

export default WeatherMast;
