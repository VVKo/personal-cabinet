import React from "react";
import ReactDOM from "react-dom/client";

import { ContextProvider } from "./contexts/ContextProvider";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <ContextProvider>
 
    <App />
 
    </ContextProvider>
  </React.StrictMode>
);
