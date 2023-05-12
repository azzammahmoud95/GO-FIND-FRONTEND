import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About.js";
import Categories from "../../pages/Dashboard/Categories/Categories";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.js";
import Signup from "../../pages/Signup/Signup.js";
import Login from "../../pages/Login/Login";
export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard/categories" element={<Categories/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
