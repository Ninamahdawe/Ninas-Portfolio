import React from "react";
import { Outlet } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footers";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
