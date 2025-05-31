import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child name="John Doe" />
    </div>
  );
};

export default Parent;
