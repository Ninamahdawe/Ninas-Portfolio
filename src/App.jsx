import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../src/components/Nav.jsx";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/AboutMe.jsx";
import Contact from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import { Footerdata } from "./data/data.jsx";
import "./assets/css/App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer data={footerData} />
    </Router>
  );
}

export default App;
