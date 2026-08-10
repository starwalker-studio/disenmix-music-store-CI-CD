import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { Clients } from "../pages/clients/Clients";
import { StoreRoutes } from "./products/StoreRoutes";

export const AdminStoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/*" element={<StoreRoutes />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
};
