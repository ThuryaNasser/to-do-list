import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SnackbarProvider } from "utils/context/SnackbarProvider";

const container = document.getElementById("root");
const root = createRoot(container);

const wrappedApp = (
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
);

root.render(wrappedApp);
