import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <Person name="Kathe" age="26"/>
        <Person name="Ale" age="28"/>
        <Person name="Meli" age="30"/>
        <Person name="Frank" age="32"/>
        <Person name="Rafi" age="34">My Hobbies: Racing</Person>
        <Person name="Koke" age="36"/>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
