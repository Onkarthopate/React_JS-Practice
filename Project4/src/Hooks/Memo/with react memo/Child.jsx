import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <div>Child: {name}</div>;
});

export default Child;
