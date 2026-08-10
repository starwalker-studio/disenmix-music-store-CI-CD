import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Dashboard";
import { AdminStoreRoutes } from "../routes/AdminStoreRoutes";

export const AdminStoreApp = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Dashboard>
              <AdminStoreRoutes />
            </Dashboard>
          </>
        }
      />
    </Routes>
  );
};
