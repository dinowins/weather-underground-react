import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';
import PropTypes from "prop-types";

function WeatherMast(props) {
  return (
    <div className='favorites-bar'>
      <p id='popular-cities'>Popular Cities</p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ca/san-francisco/37.77%2C-122.42'>{props.NewCities.SF.temp}°F {props.NewCities.SF.name}</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ny/manhattan/40.71,-74.01'> {props.NewCities.NYC.temp}°F {props.NewCities.NYC.name}</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ga/atlanta/33.75,-84.39'>{props.NewCities.ATL.temp}°F {props.NewCities.ATL.name}</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/il/chicago/41.88,-87.63'>{props.NewCities.CHI.temp}°F {props.NewCities.CHI.name}</a></p>
      <p className='city-link'><a href='https://www.wunderground.com/weather/us/ma/boston/42.36,-71.06'>{props.NewCities.BOS.temp}°F {props.NewCities.BOS.name}</a></p>
    </div>
  );
}

WeatherMast.propTypes = {
  NewCities: PropTypes.object
}

export default WeatherMast;
