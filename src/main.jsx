import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import App from "./App.jsx";
import "./assets/css/index.css";

import { projectsData, aboutData, contactData } from "./data/data.jsx";

function Main() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </App>
    </Router>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render();
