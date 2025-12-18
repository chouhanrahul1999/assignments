// login code here
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  // call the functions onClick of button.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");

  async function handleLogin() {
    try {
      if (!username || !password) {
        throw new Error("Username and password are required");
      }
      const endpoint = userType === "admin" ? "/admin/login" : "/user/login";
      const response = await axios.post(`http://localhost:3000${endpoint}`, {
        username: username,
        password: password,
      }); // // if you don't know about axios, give it a read https://axios-http.com/docs/intro
      console.log("Success", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userType", userType);
    } catch (error) {
      console.log("Error:", error.response?.data?.message);
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>
          <input
            type="radio"
            value="user"
            checked={userType === "user"}
            onChange={(e) => setUserType(e.target.value)}
          />
          user
        </label>
        <label>
          <input
            type="radio"
            value="admin"
            checked={userType === "admin"}
            onChange={(e) => setUserType(e.target.value)}
          />
          Admin
        </label>
      </div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
