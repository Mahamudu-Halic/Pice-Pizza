import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClerkProviderWithRoutes } from "./auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
