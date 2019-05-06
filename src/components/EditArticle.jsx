import React from 'react';
import PropTypes from 'prop-types';

function EditArticle(props) {
  let _title = null;
  let _description = null;
  let _link = null;
  let _photo = null;

  function submitNewArticle(event) {
    event.preventDefault();
    props.onEditArticle(props.index, {title: _title.value, description: _description.value, link: _link.value, photo: _photo.value}); 
    _title.value = '';
    _description.value = '';
    _link.value = '';
    _photo.value = '';
    props.onSubmitToggle();
  }

  return (
    <form onSubmit={submitNewArticle}>
      <input placeholder={props.title} ref={(input) => { _title = input; }} />
      <input placeholder={props.description} ref={(input) => { _description = input; }} />
      <input placeholder={props.link} ref={(input) => { _link = input; }} />
      <input placeholder={props.photo} ref={(input) => { _photo = input; }} />
      <button type='submit'>Submit</button>
    </form>
  )
}

EditArticle.propTypes = {
  onEditArticle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onSubmitToggle: PropTypes.func.isRequired
};

export default EditArticle;
