// src/main.ts
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const queryClient = new QueryClient();

const elem = document.getElementById("root");
const app = (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

if (import.meta.hot) {
  const root = (import.meta.hot.data.root ??= createRoot(elem!));
  root.render(app);
} else {
  createRoot(elem!).render(app);
}
