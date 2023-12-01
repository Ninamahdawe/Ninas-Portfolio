import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// import AboutMe from "./pages/AboutMe";
// import Projects from "./pages/Project";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
