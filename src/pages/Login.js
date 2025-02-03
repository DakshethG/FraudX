import React, { useState } from "react";
import "../index.css";

const Login = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [mpin, setMpin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { accountNumber, mpin });
  };

  return (
    <div className="container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="M-PIN"
          value={mpin}
          onChange={(e) => setMpin(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        No account? <a href="/signup">Create one</a>
      </p>
    </div>
  );
};

export default Login;