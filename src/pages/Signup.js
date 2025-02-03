import React, { useState } from "react";
import "../index.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    mpin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up:", formData);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Account Number"
          value={formData.accountNumber}
          onChange={(e) =>
            setFormData({ ...formData, accountNumber: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="M-PIN"
          value={formData.mpin}
          onChange={(e) =>
            setFormData({ ...formData, mpin: e.target.value })
          }
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;