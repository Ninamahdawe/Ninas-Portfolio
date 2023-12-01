import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import AboutMe from "./pages/AboutMe.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import { aboutData, projectsData, contactData } from "./data/data.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home data={aboutData} />
      <Routes>
        <Route path="/about" element={<AboutMe data={aboutData} />} />
        <Route path="/portfolio" element={<Project data={projectsData} />} />
        <Route path="/contact" element={<Contact data={contactData} />} />
      </Routes>
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;

// import AboutMe from "./components/AboutMe";
// import Nav from "../src/components/Nav.jsx";
// import Home from "../src/pages/Home.jsx";
// import About from "../src/pages/AboutMe.jsx";
// import Contact from "./components/ContactForm.jsx";
// import Footer from "./components/Footer.jsx";
// import { Footerdata } from "./data/data.jsx";
// import "./assets/css/App.css";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Nav />
//           <Hero />
//         </div>
//         <AboutMe />
//         <Project />
//         <Contact />
//         <ContactForm />
//         <Footer />
//         <div className="relative z-0">
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };
// export default App;

/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} /> */
/* <Route path="/contact" component={Contact} /> */
/* <Footer data={footerData} /> */
