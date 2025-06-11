import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // Memoized function
  const handleClick = useCallback(() => {
    alert(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
}

export default UseCallbackExample;
