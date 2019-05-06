import React from 'react';

export default class NewCityControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }
  
  render() {
    return (
     <div>
       <p>This is the NewCityControl component!</p>
       <strong onClick={this.handleClick}>Click me to change my state!</strong>
     </div>
    );
  }
}