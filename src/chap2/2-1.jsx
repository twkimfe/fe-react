import React from "react";
import { createRoot } from "react-dom/client";

const element = <button>Hello, world!</button>;
const container = document.getElementById("root");
const root = createRoot(container);

root.render(element);
