import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";

const mainEl = document.querySelector("#root");
const root = ReactDOM.createRoot(mainEl);

root.render(<App />);
