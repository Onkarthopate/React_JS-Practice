import React, { useState, useMemo } from "react";
import ChildComp from "./ChildComp";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num;
  }
  return result;
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useMemo: avoid recalculation unless `count` changes
  const result = useMemo(() => expensiveCalculation(count), [count]);

  console.log("Parent rendered");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <ChildComp result={result} />
    </div>
  );
};

export default Parent;
