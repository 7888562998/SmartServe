import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import About from "./Pages/AboutPage/About";
import Barcode from "./Pages/BarCode/Barcode";

function Home() {
  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        fontFamily: "Poppins",
      }}
    >
      <h1>Welcome to SmartServe</h1>
      <p>Create restaurant orders using your table Order Code.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/barcode" element={<Barcode />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;