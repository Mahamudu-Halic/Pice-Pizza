import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClerkProviderWithRoutes } from "./auth";
import App from "./App";
import { AuthContextProvider } from "./services/auth/auth.context";
import { OrderContextProvider } from "./services/order/order.context";
import { AdminContextProvider } from "./services/admin/admin.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      
            <ClerkProviderWithRoutes />
            {/* <App /> */}
         
    </BrowserRouter>
  </React.StrictMode>
);
