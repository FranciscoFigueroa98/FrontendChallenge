//REACT
import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./css/global.css";

//COMPONENTE PRINCIPAL
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
      <App />
   
  </React.StrictMode>
);
