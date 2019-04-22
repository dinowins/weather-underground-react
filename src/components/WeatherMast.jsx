import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function WeatherMast() {
  return (
    <div className='favorites-bar'>
      <p id='popular-cities'>Popular Cities</p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ca/san-francisco/37.77%2C-122.42'>San Francisco, CA</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ny/manhattan/40.71,-74.01'>Manhattan, NY</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ga/atlanta/33.75,-84.39'>Atlanta, GA</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/il/chicago/41.88,-87.63'>Chicago, IL</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ma/boston/42.36,-71.06'>Boston, MA</a></p>
    </div>
  );
}

export default WeatherMast;
