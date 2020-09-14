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
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    // Don't do this: this.setState({persons: }).persons[0].name = "Caligula";
    this.setState({
      persons: [
        { name: newName, age: 50 },
        { name: "Ale", age: 28 },
        { name: "Meli", age: 30 },
        { name: "Frank", age: 32 },
        { name: "Rafi", age: 34 },
        { name: "Koke", age: 36 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Kathe", age: 26 },
        { name: "Ale", age: 28 },
        { name: "Meli", age: 30 },
        { name: "Frank", age: 32 },
        { name: event.target.value, age: 34 },
        { name: "Koke", age: 36 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Maximilian")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}/>
        <Person
          name={this.state.persons[4].name}
          age={this.state.persons[4].age}
          click={this.switchNameHandler.bind(this, "Maximilian!!!!!!!")}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[5].name}
          age={this.state.persons[5].age}/>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
