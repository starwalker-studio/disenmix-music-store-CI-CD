import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WaveStoreApp } from "./app/WaveStoreApp";
import "./scss/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WaveStoreApp />
    </BrowserRouter>
  </StrictMode>,
);
