import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/chap3/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
