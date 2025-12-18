// register code here
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  // call the functions onClick of button.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");

  async function handleRegister() {
    try {
      if (!username || !password) {
        throw new Error("Username and password are required");
      }
      const endpoint = userType === "admin" ? "/admin/signup" : "/user/signup";
      const response = await axios.post(`http://localhost:3000${endpoint}`, {
        username: username,
        password: password,
      }); // if you don't know about axios, give it a read https://axios-http.com/docs/intro
      console.log("Success:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userType", userType);
    } catch (error) {
      console.log("Error:", error.response?.data?.message);
    }
  }
  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>
          <input
            type="radio"
            value="user"
            checked={userType === "user"}
            onChange={(e) => setUserType(e.target.value)}
          />
          User
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

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
