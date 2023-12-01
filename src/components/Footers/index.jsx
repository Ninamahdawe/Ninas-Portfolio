import React from "react";
import { Footerdata } from "../../data/data.jsx";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <p>{Footerdata.copyright}</p>
        <a href={Footerdata.linkedin}>LinkedIn</a>
        <a href={Footerdata.github}>GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
