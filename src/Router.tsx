import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import World from "./components/Pages/World";
import ProductPage from "./components/Pages/ProductPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/julistus-app" element={<Home />} />
      <Route path="/kauppa" element={<Shop />} />
      <Route path="/tuote" element={<ProductPage />} />
      <Route path="/meistä" element={<About />} />
      <Route path="/maailma" element={<World />} />
    </Routes>
  );
};

export default Router;
