import React, { Component } from 'react';
import './App.css';
import Calendar from './components/atoms/calendar.atom.js'

class App extends Component {
  render() {
    return (
      <div className="App" >
          <Calendar/>
      </div>
    );
  }
}

export default App;
