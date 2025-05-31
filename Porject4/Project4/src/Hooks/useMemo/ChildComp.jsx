import React from "react";

const ChildComp = ({ result }) => {
  console.log("Child rendered");
  return <h1>Expensive calculation result: {result}</h1>;
};

export default ChildComp;
