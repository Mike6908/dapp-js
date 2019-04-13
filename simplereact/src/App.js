import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.setState ({

        name: "Michael"
    });
  }
  render() {
    return (
      <div className="App">
        <h1> Welcome to {this.state.name}'s dapp </h1>
      </div>
    );
  }
}

export default App;
