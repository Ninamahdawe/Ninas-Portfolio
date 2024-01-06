// import React from "react";
// import "./assets/css/App.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footers";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="text-3xl font-bold">
        <NavBar />
        <Outlet />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
