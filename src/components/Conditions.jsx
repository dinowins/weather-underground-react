import React from 'react';
import '../scss/styles.scss';

function Conditions(){
  return(
    <div className="conditions-wrapper">
      <style jsx>{`
        .conditions-wrapper {
          display: flex;
          flex-direction: column;
          width: 65%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
        }
        h2 {
          color: #FFF;
          text-align: center;
        }
        img {

        }
        .button-forecast {
          display: flex;
          margin-right: auto;
          margin-left: auto;
          color: #FFFFFF;
          background-color: #15AADC;
          padding: 7.5px 52.5px;
          border-radius: 3px;
          font-size: 15px;
          max-width: 50%;
          font-family: sans-serif;
          border: 1px solid transparent;
          border-top: 3px solid transparent;
          border-bottom: 3px solid #008fbf;
          cursor: pointer;
          opacity: 1;
          transition: .25s;
        }

        .button-forecast a {
          color: #FFF;
          text-decoration: none;
        }
      `}</style>
      <h2>Beaverton, OR</h2>
      <img src={require('../assets/images/conditions.png')} alt="region conditions"/>
      <button className='button-forecast' type='button'><a href='https://www.wunderground.com/weather/us/or/beaverton/KORBEAVE151?utm_source=HomeCard&utm_content=Button&cm_ven=HomeCardButton'>Full Forecast</a></button>
    </div>
  );
}

export default Conditions;
