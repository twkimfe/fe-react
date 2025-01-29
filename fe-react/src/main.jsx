import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../chap2/2-6.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
