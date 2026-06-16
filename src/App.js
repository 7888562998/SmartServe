import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Header from "./Components/Header/Header.js";
import Home from "./Pages/HomePage/Home.jsx";
import About from "./Pages/AboutPage/About.jsx";
import Barcode from "./Pages/BarCode/Barcode.jsx";
import Register from "./Pages/RegisterPage/Register.jsx";
import FoodList from "./Pages/FoodListpage/FoodList.jsx";
import AddProductForm from "./Pages/AddProductPage/AddProductForm.jsx";
import OwnerLayout from "./Layouts/OwnerLayout.jsx";
import Dashboard from "./Pages/admin/Pages/Dashboard/Dashboard.jsx";
import UploadProducts from "./Pages/admin/Pages/UploadProducts/UploadProducts.jsx";

import "./App.css"



function App() {
  const location = useLocation();
  const loginType = localStorage.getItem("loginType");
  const isOwner = loginType === "Owner";
  const hideHeader = location.pathname.startsWith("/foodList");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && isOwner && location.pathname === "/") {
      navigate("/admin", { replace: true });
    }
  }, [token, isOwner, location.pathname, navigate]);

  return (
    <>
      {!isOwner && !hideHeader && <Header />}

      <Routes>
        {isOwner && token ? (
          <Route path="/admin" element={<OwnerLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="uploadproducts" element={<UploadProducts />} />
          </Route>
        ) : <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/barcode" element={<Barcode />} />
          <Route path="/register" element={<Register />} />
          <Route path="/foodList/:barcode" element={<FoodList />} />
          <Route path="/AddFoodProduct" element={<AddProductForm />} />
        </>}
      </Routes >
    </>
  );
}

export default App;