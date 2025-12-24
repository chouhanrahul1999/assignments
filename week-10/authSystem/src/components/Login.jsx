import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthSystem";

const Login = ({ onLogin: propOnLogin }) => {
  const [username, setUsername] = useState("");
  const contextValue = useContext(AuthContext);

  const handleLogin = () => {
    if (contextValue?.Login) {
      contextValue.Login(username);
    } else if (propOnLogin) {
      propOnLogin(username);
    }
    setUsername("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "300px",
        margin: "0 auto",
      }}
    >
      <label htmlFor="username" style={{ fontWeight: "bold" }}>
        Username
      </label>
      <input
        id="username"
        type="text"
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "#3f98b5",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
