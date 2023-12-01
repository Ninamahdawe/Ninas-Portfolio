import React from "react";
import Project from "./Project";

const Projects = ({ data: projects }) => {
  const listsProjects = projects.map((project) => (
    <Project key={project.id} {...project} />
  ));
  return (
    <div>
      <h1>Projects</h1>
      {listsProjects}
    </div>
  );
};

export default Projects;
