import React from 'react';
import ArticleList from './ArticleList';
import Header from './Header';
import WeatherMast from './WeatherMast';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <WeatherMast/>
      <Switch>
        <Route exact path='/' component={ArticleList} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
