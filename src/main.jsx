import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.scss";
import "./index.css";
import { TeamScrollProvider } from "./components/TeamScrollContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <TeamScrollProvider>
         <App />
      </TeamScrollProvider>
   </React.StrictMode>
);
