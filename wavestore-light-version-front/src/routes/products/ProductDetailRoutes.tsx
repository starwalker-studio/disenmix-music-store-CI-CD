import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "../../pages/product-detail/ProductDetail";

export const ProductDetailRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/detail/:product/:category/:itemID"
          element={<ProductDetail />}
        />
      </Routes>
    </>
  );
};
