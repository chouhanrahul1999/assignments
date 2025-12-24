import React, { createContext, useState } from "react";
import AppBar from "../../solution/AppBar";
import Home from "../../solution/Home";
import Login from "./Login";

export const AuthContext = createContext(undefined);

const AuthSystem = () => {
  const [useContextApi, setUseContextApi] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const logout = (username) => {
    setUsername("");
    setIsLoggedIn(false);
  };

  const contextValue = useContextApi
    ? { username, isLoggedIn, login, logout }
    : undefined;

  return (
    <AuthContext.Provider value={contextValue}>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <AppBar username={username} isLoggedIn={isLoggedIn} logout={logout} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "1rem",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              id="use-context-api"
              checked={useContextApi}
              onChange={(e) => setUseContextApi(e.target.checked)}
            />
            <label htmlFor="use-context-api">
              Use context api: {useContextApi ? "on" : "off"}
            </label>
          </div>
        </div>
        <main style={{ flex: 1, padding: "1rem" }}>
          {isLoggedIn ? <Home /> : <Login onLogin={login} />}
        </main>
      </div>
    </AuthContext.Provider>
  );
};

export default AuthSystem;
