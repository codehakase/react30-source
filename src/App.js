import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello React"
    }
  }

  update(e) {
    this.setState({text: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.text}</h1>
        <input type="text" onChange={this.update.bind(this)} />
      </div>
    );
  }
}

export default App;
