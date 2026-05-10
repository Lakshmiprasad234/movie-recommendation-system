import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Recommendations from "../pages/Recommendations";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;