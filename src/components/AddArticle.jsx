import React from 'react';
import PropTypes from 'prop-types';

function AddArticle(props) {
  let _title = null;
  let _description = null;
  let _link = null;
  let _photo = null;

  function addNewArticle(event) {
    event.preventDefault();
    props.onAddArticle({title: _title.value, description: _description.value, link: _link.value, photo: _photo.value});
    _title.value = '';
    _description.value = '';
    _link.value = '';
    _photo.value = '';
    props.toggleAdd();
  }
  
  return(
    <form onSubmit={addNewArticle}>
      <input placeholder='Title' ref={(input) => { _title = input; }} />
      <input placeholder='Description' ref={(input) => { _description = input; }} />
      <input placeholder='link' ref={(input) => { _link = input; }} />
      <input placeholder='photo' ref={(input) => { _photo = input; }} />
      <button type='submit'>Submit</button>
    </form>
  );

}

AddArticle.propTypes = {
};

export default AddArticle;