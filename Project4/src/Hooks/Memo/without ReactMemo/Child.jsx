import React from "react";

const Child = ({ name }) => {
  console.log("Child rendered");
  return <div>Child: {name}</div>;
};

export default Child;
