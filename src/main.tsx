import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Observer } from "tailwindcss-intersect/observer";
import "./index.css";
import App from "./App";

Observer.start();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);