import React from 'react';
import Article from './Article';
import SignUpHero from './SignUpHero';
import Conditions from './Conditions';
import masterArticleList from '../models/articleData.js'

function ArticleList(){
  return (
    <div>
      <Conditions/>
      <SignUpHero/>
      {masterArticleList.map((article, index) =>
        <Article title={article.title}
          description={article.description}
          photo={article.photo}
          link={article.link}
          key={index}/>
      )}
    </div>
  );
}

export default ArticleList;
