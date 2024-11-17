import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPages";
import RegisterPage from "../pages/RegisterPages";
import ProductDetails from "../components/ProductDetails";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default RouterConfig;
