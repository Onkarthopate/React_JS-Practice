import React, { useState } from "react";

//  Child component wrapped in React.memo
const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <h3>Hello, {name}!</h3>;
});

function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React.memo Example</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>

      {/* Pass constant prop to Child */}
      <Child name="Alice" />
    </div>
  );
}

export default ReactMemo;
