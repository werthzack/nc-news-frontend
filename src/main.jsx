import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import.meta.glob("./styles/**/*.css", { eager: true });
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
