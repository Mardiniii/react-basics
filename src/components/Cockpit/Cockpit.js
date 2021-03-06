import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  // Execute hook only by the first time.
  // Equivalent to componentDidMount
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // const timer = setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleButtonRef.current.click();
    // return () => {
    //   clearTimeout(timer);
    //   console.log("[Cockpit.js] cleanup work in useEffect");
    // };
  }, []);

  // Execute hook with field dependency
  // Everytime `props.persons` changes
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  //   // Http request...
  //   setTimeout(() => {
  //     alert("Saved data to cloud!");
  //   }, 1000);
  // }, [props.persons]);

  // Execute for every update cycle
  // Useful for the cases we need to do something whenever
  // the component re-renders
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
