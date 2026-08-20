import { Route, Routes } from "react-router-dom";
import { Products } from "../../pages/products/Products";
import { AddProduct } from "../../pages/products/add-product/AddProduct";
import { EditProduct } from "../../pages/products/edit-product/EditProduct";
import { ViewProduct } from "../../pages/products/view-product/ViewProduct";

export const StoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit" element={<EditProduct />} />
      <Route path="/view-product" element={<ViewProduct />} />
    </Routes>
  );
};
