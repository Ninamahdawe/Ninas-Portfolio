// import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ContactForm, Footer, Nav, Hero, StarsCanvas } from "./components";
import AboutMe from "./pages/AboutMe";
// import Nav from "../src/components/Nav.jsx";
// import Home from "../src/pages/Home.jsx";
// import About from "../src/pages/AboutMe.jsx";
// import Contact from "./components/ContactForm.jsx";
// import Footer from "./components/Footer.jsx";
// import { Footerdata } from "./data/data.jsx";
// import "./assets/css/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Nav />
          <Hero />
        </div>
        <AboutMe />
        <ContactForm />
        <Footer />
        <div className="relative z-0">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;

/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} /> */
/* <Route path="/contact" component={Contact} /> */
/* <Footer data={footerData} /> */
