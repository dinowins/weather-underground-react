import React from 'react';

function NewCityForm(){
  return (
    <div>
      <form>
        <input 
          type="text"
          id="name"
          placeholder="city name"/>
          <input 
          type="number"
          id="temp"
          placeholder="city temperature"/>
          <input 
          type="text"
          id="link"
          placeholder="city weather link"/>
          <button type='submit'>Submit city info</button>
      </form>
    </div>
  );
}

export default NewCityForm; 