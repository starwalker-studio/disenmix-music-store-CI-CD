import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AdminStoreApp } from "./app/AdminStoreApp";
import "./scss/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AdminStoreApp />
    </BrowserRouter>
  </StrictMode>,
);
