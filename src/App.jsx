import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import React from "react";
import Cart from "./pages/Cart";
import ShoppingAPI from "./pages/ShoppingAPI"; // <- Import it

export default function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<ShoppingAPI />} /> 
      <Route path="cart" element={<Cart />}/>
    </Route>
  </Routes>
</BrowserRouter>

  );
}
