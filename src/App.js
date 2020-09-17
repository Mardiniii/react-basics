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
    otherState: "some other value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
          {/* <Person
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
            age={this.state.persons[5].age}/> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
