import { Route, Routes } from "react-router-dom";
import { Success } from "../../components/success/Success";
import { Cart } from "../../pages/cart/Cart";

export const WavestoreCartRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};
