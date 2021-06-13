import React from "react";
import anywhere_fitness from "../../assets/images/anywhere_fitness.png";
import fp_service_tracker from "../../assets/images/fp_service_tracker.png";
import ProjectCard from "./ProjectCard";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  // ProjectCard,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectCard
          image={anywhere_fitness}
          title="Anywhere Fitness"
          frontText="Instructors can create virtual fitness classes that users can enroll in"
          backTitle="tech used to create"
          backText="asdfasdf"
        />
        <ProjectCard
          image={fp_service_tracker}
          title="Non-Profit Service Tracker"
          frontText="Employees can track services provided to recipients and create metrics"
          backTitle="tech used to create"
          backText="asdfasdf"
        />
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
