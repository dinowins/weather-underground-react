import React from 'react';
import '../scss/styles.scss';
import PropTypes from 'prop-types';

function City(props) {
  return (
    <p className='city-link'><a href={props.link}>{props.temp}°F {props.name}</a></p>
  );
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired
};

export default City; 