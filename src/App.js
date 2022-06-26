import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        {/* <Redirect to="/404" /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
