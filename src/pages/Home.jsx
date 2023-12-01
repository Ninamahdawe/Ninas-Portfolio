import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { aboutData, contactData } from "../data/data";

const Home = () => {
  return (
    <Parallax bgImage="src/assets/image/Profile-preview.png" strength={500}>
      <div style={{ height: 500 }}>
        <h1>
          Hi, I'm{" "}
          <mark style={{ backgroundColor: "lightblue" }}>
            <strong>{aboutData.name}</strong>
          </mark>
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
  );
};

export default Home;
