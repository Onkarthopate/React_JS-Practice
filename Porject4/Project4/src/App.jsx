import React from "react";

import Parent from "./Hooks/useMemo/useMemoExample";

// import Parent from "./Hooks/without ReactMemo/Parent";
// import Parent from "./Hooks/with react memo/Parent";

const App = () => {
  return (
    <div>
      {/* <h1>React.memo Example (No Memo)</h1>
      <Parent /> */}

      {/* <h1>React.Memo Example</h1>
      <Parent/>
       */}


      <h1>React.Memo Example</h1>
      <Parent/>
    </div>
  );
};

export default App;
