import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Kathe", age: 26 },
      { name: "Ale", age: 28 },
      { name: "Meli", age: 30 },
      { name: "Frank", age: 32 },
      { name: "Rafi", age: 34 },
      { name: "Koke", age: 36 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[5].name} age={this.state.persons[5].age}/>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
