import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  let ticketStyles = {
    backgroundColor: '#1e2023',
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
    <div style = {ticketStyles}>
      <h2 className="article-title"><a href="#">{props.title}</a></h2>
      <style jsx>{`
        .article-title {
          color: #8ED1E9;
        }
        a:visited {
          text-decoration: none;
          color: #8ED1E9;
        }
        a:hover {
          color: #8ED1E9;
        }
        a:focus {
          text-decoration: none;
          color: #8ED1E9;
        }
        .article-description {
          color: #FFF;
        }
      `}</style>
      <p className="article-description">{props.description}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Article;
