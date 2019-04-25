import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  let ticketStyles = {
    backgroundColor: '#eee',
    fontFamily: 'sans-serif',
    paddingTop: '25x',
    transition: '.3s linear',
    margin: '10px 0px',
    padding: '0px 10px',
    borderBottom: '1px solid grey',
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto'
  };
  return (
    <div style = {ticketStyles} className='hover-shadow' data-aos='fade-in'>
      <h3>{props.title}</h3>
      <p><em>{props.description}</em></p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Article;
