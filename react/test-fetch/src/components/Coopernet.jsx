import React, { Component } from 'react';
class Coopernet extends Component {
  constructor(props){
    super(props);
    this.url_server = "http://www.coopernet.fr/";
  }
  getCards = () => {
    console.log("dans GetCards");
  }
  state = {  }
  render() {
    return ( <h1>Hello World</h1> );
  }
}

export default Coopernet;