import React, { useState } from "react";
import anywhere_fitness from "../../assets/images/anywhere_fitness.png";
import fp_service_tracker from "../../assets/images/fp_service_tracker.png";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectCardHover,
} from "./ProjectsElements";

const Projects = () => {
  const [displayHidden, setDisplayHidden] = useState(false);

  const showHidden = () => {
    setDisplayHidden(true);
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard onMouseOver={showHidden}>
          <ProjectsIcon src={anywhere_fitness} />
          <ProjectsH2>Anywhere Fitness</ProjectsH2>
          <ProjectsP>
            Instructors can create virtual fitness classes that users can enroll
            in
          </ProjectsP>
          <ProjectCardHover className="hoverdiv">
            <p>Stuff</p>
          </ProjectCardHover>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={fp_service_tracker} />
          <ProjectsH2>Non-Profit Service Tracker</ProjectsH2>
          <ProjectsP>
            Employees can track services provided to recipients and create
            metrics
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
