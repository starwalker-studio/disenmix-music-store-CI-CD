import { Route, Routes } from "react-router-dom";
import { AccesoriesProducts } from "../../pages/catalog/accesories/AccesoriesProducts";
import { BassProducts } from "../../pages/catalog/bass/BassProducts";
import { DrumsProducts } from "../../pages/catalog/drums/DrumsProducts";
import { GuitarProducts } from "../../pages/catalog/guitar/GuitarProducts";

export const ProductRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/guitars" element={<GuitarProducts />} />
        <Route path="/basses" element={<BassProducts />} />
        <Route path="/drums" element={<DrumsProducts />} />
        <Route path="/accessories" element={<AccesoriesProducts />} />
      </Routes>
    </>
  );
};
