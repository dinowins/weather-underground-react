import React from 'react';
import '../scss/styles.scss';

function Conditions(){
  return(
    <div>
      <h2>Beaverton, OR</h2>
      <img src={require(`../assets/images/conditions.png`)} alt="region conditions"/>
      <button className='button-forecast' type='button'><a href='https://www.wunderground.com/weather/us/or/beaverton/KORBEAVE151?utm_source=HomeCard&utm_content=Button&cm_ven=HomeCardButton'>Full Forecast</a></button>
    </div>
  )
}

export default Conditions;
