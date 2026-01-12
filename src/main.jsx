import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./design-tokens.css";
import "./App.scss";
import "./index.css";
import { TeamScrollProvider } from "./components/TeamScrollContext.jsx"
import { LanguageProvider } from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <LanguageProvider>
         <TeamScrollProvider>
            <App />
         </TeamScrollProvider>
      </LanguageProvider>
   </React.StrictMode>
);
