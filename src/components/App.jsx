import React from 'react';
import ArticleList from './ArticleList';
import Header from './Header';
import Join from './Join';
import Login from './Login';
import WeatherMast from './WeatherMast';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cityList: {
        SF: {
          name: "San Francisco",
          temp: 70
        },
        ATL: {
          name: "Atlanta",
          temp: 84
        }
      }
    }
    this.changeTemp = this.changeTemp.bind(this);
  }


  changeTemp() {
      console.log(this.state.cityList);
  }

  render(){
    return (
      <div>
      <Header/>
      <button onClick={this.changeTemp}>Change temp</button>
      <WeatherMast NewCities = {this.state.cityList}/>
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
