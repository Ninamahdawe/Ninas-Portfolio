import React from "react";
import { Link } from "react-router-dom";
// import { resumeData } from "../data/data";

const Home = () => {
  return (
    <div>
      <h1>
        Hi, I'm{" "}
        <mark style={{ backgroundColor: "lightblue" }}>
          <strong>Nina Mahdawe</strong>
        </mark>
      </h1>
      <p>Full stack Software Engineer</p>
      <small>San Jose, California</small>
      <button>
        <Link to="/about">Go to About Me</Link>
      </button>
      <div>
        <a href="https://www.linkedin.com">
          <img src="linkedin_logo.png" alt="LinkedIn Logo" />
        </a>
        <a href={resumeData} download>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
