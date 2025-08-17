/**
 * Entry point: src/main.ts
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const elem = document.getElementById("root");
const app = (
  <ThemeProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>
);

if (import.meta.hot) {
  const root = (import.meta.hot.data.root ??= createRoot(elem!));
  root.render(app);
} else {
  createRoot(elem!).render(app);
}
