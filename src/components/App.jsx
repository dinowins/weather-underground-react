import React from 'react';
import ArticleList from './ArticleList';
import Header from './Header';
import Join from './Join';
import Login from './Login';
import WeatherMast from './WeatherMast';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <WeatherMast/>
      <Switch>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/join' component={Join} />
        <Route exact path ='/login' component={Login} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
      <Footer/>
    </div>
  );
}

export default App;
