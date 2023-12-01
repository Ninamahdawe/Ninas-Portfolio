import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import App from "./App.jsx";
import "./assets/css/index.css";

// import { projectsData, aboutData, contactData } from "./data/data.jsx";

function Main() {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </App>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render();
