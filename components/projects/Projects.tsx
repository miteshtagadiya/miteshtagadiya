import React from "react";
import projects from "@/data/content/projects";
import ProjectCard from "./ProjectCard";

function Projects({ overwriteProjects }) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map(item => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
