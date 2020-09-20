import React, { Children } from "react";
import styled from "styled-components";

import classes from "./Person.css";

const person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input
        className="Input"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default person;
