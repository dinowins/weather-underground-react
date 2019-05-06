import React from 'react';
import PropTypes from 'prop-types';
import EditArticle from './EditArticle';

function Article(props){
  let ticketStyles = {
    display: 'flex',
    backgroundColor: '#1e2023',
    fontFamily: 'sans-serif',
    paddingTop: '25x',
    transition: '.3s linear',
    margin: '10px 0px',
    padding: '0px 10px',
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '50px'
  };
  return (
    <div style = {ticketStyles}>
    <style jsx>{`
      img {
        max-width: 250px;
        max-height: 175px;
        min-width: 250px;
        min-height: 175px;
      }
      .article-title {
        color: #8ED1E9;
      }
      a:visited {
        text-decoration: none;
        color: #8ED1E9;
      }
      a:hover, a {
        color: #8ED1E9;
      }
      a:focus {
        text-decoration: none;
        color: #8ED1E9;
      }
      .article-description {
        color: #FFF;
      }
      .wordBox {
        margin-left: 40px;
      }
      `}</style>
      <img src={require(`../assets/images/${props.photo}.jpg`)} alt="article"/>
      <div className="wordBox">
        <h2 className="article-title"><a href={props.link}>{props.title}</a></h2>
        <p className="article-description">{props.description}</p>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};

export default Article;
