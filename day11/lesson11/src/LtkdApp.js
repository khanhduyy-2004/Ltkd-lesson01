import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LtkdNavBar from "./components/LtkdNavBar";
import LtkdHome from "./pages/LtkdHome";
import LtkdAbout from "./pages/LtkdAbout";
import LtkdContact from "./pages/LtkdContact";
import LtkdProduct from "./pages/LtkdProduct";
import LtkdProductDetail from "./pages/LtkdProductDetail";
import LtkdNotFound from "./pages/LtkdNotFound";
import LtkdUsers from "./pages/LtkdUsers";
import LtkdUserAdd from "./pages/LtkdUserAdd";
import LtkdUserEdit from "./pages/LtkdUserEdit";
import LtkdCategories from "./pages/LtkdCategories";

export default function LtkdApp() {
  return (
    <div className="container border">
      <h1>React Router - Demo [Lê Trần Khánh Duy]</h1>
      <hr />
      <BrowserRouter>
        <LtkdNavBar />
        <Routes>
          <Route path="/" element={<LtkdHome />} />
          <Route path="/about" element={<LtkdAbout />} />
          <Route path="/contact" element={<LtkdContact />} />

          {/* Nested routes cho products */}
          <Route path="/products" element={<LtkdProduct />}>
            <Route path=":id" element={<LtkdProductDetail />} />
          </Route>

          {/* Nested routes cho users */}
          <Route path="/users" element={<LtkdUsers />}>
            <Route path="add" element={<LtkdUserAdd />} />
            <Route path="edit/:id" element={<LtkdUserEdit />} />
          </Route>

          <Route path="/categories" element={<LtkdCategories />} />

          {/* 404 page */}
          <Route path="*" element={<LtkdNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
