import React from 'react';
import NewCityForm from './NewCityForm';
import EditCity from './EditCity';

export default class NewCityControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleNewCitySubmission = this.handleNewCitySubmission.bind(this);
    this.handleEditCity = this.handleEditCity.bind(this);
  }

  handleNewCitySubmission(){
    this.setState({formVisibleOnPage: true});
  }

  handleEditCity(){
    this.setState({formVisibleOnPage: false});
  }
  
  render() {
    let currentVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleContent = <NewCityForm />
    } else {
      currentVisibleContent = <EditCity />
    }
    return (
      <div>
      <p onClick={this.handleNewCitySubmission}>Click me to add a city</p>
      <p onClick={this.handleEditCity}>Click me to edit a city</p>
       {currentVisibleContent}
     </div>
    );
  }
}