import React from 'react';
import Article from './Article';
import SignUpHero from './SignUpHero';
import masterArticleList from '../models/articleData.js'

function ArticleList(){
  return (
    <div>
      <SignUpHero/>
      <hr/>
      {masterArticleList.map((article, index) =>
        <Article title={article.title}
          description={article.description}
          key={index}/>
      )}
    </div>
  );
}

export default ArticleList;
