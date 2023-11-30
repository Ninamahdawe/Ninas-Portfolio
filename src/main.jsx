import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
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
          <Route exact path="/">
            <Home data={aboutData} />
          </Route>
          <Router path="/aboutme">
            <AboutMe data={aboutData} />
          </Router>
          <Router path="/projects">
            <Projects data={projectsData} />
          </Router>
          <Route path="/contact">
            <Contact data={contactData} />
          </Route>
        </Switch>
      </App>
    </Router>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
