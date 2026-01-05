import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {  WishList } from "../solutionsrc/components";
import AmazoneStyleCart from "./components/AmzoneStyleCart";

function App() {

  return (
    <Routes>
      <Route path="/" element={<WishList />} />
      <Route path="/cart" element={<AmazoneStyleCart />} />
    </Routes>
  );
}

export default App;
