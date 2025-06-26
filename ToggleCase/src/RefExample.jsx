import React, { useRef, useEffect } from "react";

function LoginForm() {
  const formRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
      formRef.current.onsubmit = (e) => {
        e.preventDefault(); // Prevent real form submission
        const username = usernameRef.current.value;
        const password =  passwordRef.current.value;
        console.log("Username:", username);
        console.log("Password:", password);
      };
    },[]);

  return (
    <form ref={formRef} className="p-4">
      <input
        ref={usernameRef}
        type="text"
        placeholder="Username"
        className="border p-2 mb-2 block w-full"
        name="username"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="border p-2 mb-2 block w-full"
        name="password"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm