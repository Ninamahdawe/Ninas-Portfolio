import React from "react";
import { Footerdata } from "../../data/data.jsx";

const Footer = () => {
  return (
    <footer>
      <p>{Footerdata.copyright}</p>
      <a href={Footerdata.linkedin}>LinkedIn</a>
      <a href={Footerdata.github}>GitHub</a>
    </footer>
  );
};

export default Footer;
