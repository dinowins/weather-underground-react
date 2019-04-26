import React from 'react';
import Article from './Article';
import SignUpHero from './SignUpHero';
import masterArticleList from '../models/articleData.js'

function ArticleList(){
  return (
    <div>
      <SignUpHero/>
      {masterArticleList.map((article, index) =>
        <Article title={article.title}
          description={article.description}
          photo={article.photo}
          key={index}/>
      )}
    </div>
  );
}

export default ArticleList;
