//  implement the home page UI here.
import React, { useState } from "react";

// compoents imports
import Login from "../components/Login";
import Register from "../components/Register";
import Courses from "../components/Courses";
import AdminDashboard from "../components/AdminDashboard";

const Home = () => {
  const [currentView, setCurrentView] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const userType = localStorage.getItem("userType");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setIsLoggedIn(false);
    setCurrentView("login");
  };

  if (isLoggedIn) {
    return (
      <div>
        <nav className="p-6 border-b flex justify-between ">
          <h1>Coursify - {userType === "admin" ? "Admin" : "User"}</h1>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        {userType === "admin" ? <AdminDashboard /> : <Courses />}
      </div>
    );
  }
  return (
    //  write home page UI code here
    <div>
      <nav className="p-8 border-b flex justify-between">
        <h1>Coursefy</h1>
        <div className="gap-4 flex">
          <button onClick={() => setCurrentView("login")}>Login</button>
          <button onClick={() => setCurrentView("register")}>Register</button>
        </div>
      </nav>

      {currentView === "login" && <Login />}
      {currentView === "register" && <Register />}
    </div>
  );
};

export default Home;
