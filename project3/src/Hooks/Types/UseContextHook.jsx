import React, { createContext } from "react";
import Profile from "./UseContextHook1";

export const UserContext = createContext();

function UseContextHook() {
  const user = { name: "Omkar", age: 23, role: "SD1" };

  return (
    <div>
      <h2 className="text-primary p-4">UseContext Hook Example</h2>
      <div>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default UseContextHook;
