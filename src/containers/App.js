import React, { Component } from "react";
import classes from "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClassTwo from "../hoc/withClassTwo";
import Aux from "../hoc/Aux";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "asdf", name: "Kathe", age: 26 },
      { id: "fdsa", name: "Ale", age: 28 },
      { id: "qwer", name: "Meli", age: 30 },
      { id: "rewq", name: "Frank", age: 32 },
      { id: "zxcv", name: "Rafi", age: 34 },
      { id: "vcxz", name: "Koke", age: 36 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true; // should return true or false. True by default
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  // Not recommended to use
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  deletePersonHandler = (personIndex) => {
    // Two different ways to avoid changing the original `state` object from React
    // We should update the state inmutably
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    // We should not mutate directly reference objects like arrays or objects
    // Here two approaches to do the same
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClassTwo(App, classes.App);
