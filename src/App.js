import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
class App extends Component {
  render() {
    return (
      <div className="card">
        <WordCard  value="Hello"/>
      </div>
    );
  }
}
export default App;
