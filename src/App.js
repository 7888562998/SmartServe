import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header.js";
import Home from "./Pages/HomePage/Home.jsx";
import About from "./Pages/AboutPage/About.jsx";
import Barcode from "./Pages/BarCode/Barcode.jsx";
import Register from "./Pages/RegisterPage/Register.jsx";
import FoodList from "./Pages/FoodListpage/FoodList.jsx";

function App() {
  const location = useLocation();

  const hideHeader = location.pathname.startsWith("/foodList");

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/barcode" element={<Barcode />} />
        <Route path="/register" element={<Register />} />
        <Route path="/foodList/:barcode" element={<FoodList />} />
      </Routes>
    </>
  );
}

export default App;