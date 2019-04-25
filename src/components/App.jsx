import React from 'react';
import ArticleList from './ArticleList';
import Header from './Header';
import Join from './Join';
import Login from './Login';
import WeatherMast from './WeatherMast';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      weather: {
        atlanta: null,
        sanFrancisco: null
      }
    }
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    fetch('https://api.darksky.net/forecast/e9181c11e82f5e3ecfc0d3d0bfb71525/37.8267,-122.4233')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

  render(){
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
}

export default App;
