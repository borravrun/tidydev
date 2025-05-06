import setupGlobalHotkey from "./modules/GobalHotkeys.js";
import SystemTray from "./modules/TrayIcon.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";

setupGlobalHotkey()
SystemTray();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
