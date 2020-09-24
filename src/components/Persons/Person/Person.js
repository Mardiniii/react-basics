import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");

    // Using a High-Order component for wrapping all the elements
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        ,<p>{this.props.children}</p>
        <input
          className="Input"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );

    // Using an array with the key attribute for each element
    // return [
    //   <p key={0} onClick={this.props.click}>
    //     I'm {this.props.name} and I am {this.props.age} years old!
    //   </p>,
    //   <p key={1}>{this.props.children}</p>,
    //   <input
    //     key={2}
    //     className="Input"
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />,
    // ];

    // Using a JSX-HTML element to wrap all the elements
    // return (
    //   <div className={classes.Person}>
    //     <p onClick={this.props.click}>
    //       I'm {this.props.name} and I am {this.props.age} years old!
    //     </p>
    //     <p>{this.props.children}</p>
    //     <input
    //       className="Input"
    //       type="text"
    //       onChange={this.props.changed}
    //       value={this.props.name}
    //     />
    //   </div>
    // );
  }
}

export default Person;
