import React, { Component } from 'react';
import Parts from './components/Parts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parts id={1} word="stuff"/>
      </div>
    );
  }
}

export default App;
