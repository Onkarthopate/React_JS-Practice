import React from "react";
// import { ExampleClassCompRef } from "./Hooks/Ref/ExInClassComp";

// import ExampleFuncCompRef from "./Hooks/Ref/ExInFunctionalComp";

// import './App.css';

// import ExampleCallbackSimple from "./Hooks/Callback/ExampleCallbackSimple";

import SearchComponent from "./Hooks/Callback/ExampleCallbackSimple";

// import Parent from "./Hooks/useMemo/useMemoExample";

// import Parent from "./Hooks/without ReactMemo/Parent";

// import Parent from "./Hooks/with react memo/Parent";

const App = () => {
  return (
    <div>
      {/* <h1>React.memo Example (No Memo)</h1>
      <Parent /> */}

      {/* <h1>React.Memo Example</h1>
      <Parent/> */}

      {/* <h1>UseMemo Example</h1>
      <Parent/> */}

      {/* <h1>React UseCallback Example</h1> */}

      <SearchComponent/>




      {/* <ExampleClassCompRef/> */}

      {/* <ExampleFuncCompR ef/> */}


    </div>
  );
};

export default App;
