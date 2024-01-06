import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { aboutData, contactData } from "../data/data";

const Home = () => {
  return (
    <>
      <Parallax
        Image="src/assets/image/Profile-preview.png"
        strength={450}
        // bgStyle={{ height: "auto", width: "100%" }}
      >
        <div style={{ height: "500px" }}>
          <h1 style={{ textAlign: "center", marginTop: "5%" }}>
            Hi, I'm {/* <mark style={{ backgroundColor: "" }}> */}
            <strong>{aboutData.name}</strong>
            {/* </mark> */}
          </h1>
          <p>{aboutData.occupation}</p>
          <small>{aboutData.location}</small>
          <button>
            <Link to="/about">Go to About Me</Link>
          </button>
          <a href={aboutData.resume} download>
            Download Resume
          </a>
          <button>
            <a href={contactData.linkedin}>LinkedIn</a>
          </button>
        </div>
      </Parallax>
    </>
  );
};

export default Home;
