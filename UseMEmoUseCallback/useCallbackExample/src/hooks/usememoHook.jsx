import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation memoized
  const doubleNumber = useMemo(() => {
    console.log("Calculating double...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <p>Double: {doubleNumber}</p>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default UseMemoExample;
