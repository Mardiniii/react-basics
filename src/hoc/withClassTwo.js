import React from "react";

const withClassTwo = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClassTwo;
