import React from "react";
import { aboutData } from "../data/data";

const AboutMe = () => {
  const { intro, bio, resume } = aboutData;

  return (
    <div className="container mt-5">
      <h2 className="mb-3">About Me</h2>
      <p className="mb-3">{intro}</p>
      <p className="mb-3" dangerouslySetInnerHTML={{ __html: bio }} />
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View my resume
      </a>
    </div>
  );
};

export default AboutMe;
