import React from 'react';

function NewCityForm(){

  let _name = null;
  let _temp = null;
  let _link = null;

  function handleNewCityFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_temp.value);
    console.log(_link.value);
    _name.value = '';
    _temp.value = '';
    _link.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewCityFormSubmission}>
        <input 
          type="text"
          id="name"
          placeholder="city name"
          ref={(input) => {_name = input;}}/>
          <input 
          type="number"
          id="temp"
          placeholder="city temperature"
          ref={(input) => {_temp = input;}}/>
          <input 
          type="text"
          id="link"
          placeholder="city weather link"
          ref={(input) => {_link = input;}}/>
          <button type='submit'>Submit city info</button>
      </form>
    </div>
  );
}

export default NewCityForm; 