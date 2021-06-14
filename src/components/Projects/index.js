import React from "react";
import anywhere_fitness from "../../assets/images/anywhere_fitness.png";
import fp_service_tracker from "../../assets/images/fp_service_tracker.png";
import ProjectCard from "./ProjectCard";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
} from "./ProjectsElements";

const afInfo = [
  `
  • Architected state management system combining multiple reducers using React-Redux and local storage for state persistence

  • Developed secure routes utilizing Axios and Jwt tokens to only allow access to authorized users

  • Created login and manipulated API response data to properly route traffic to their respective dashboards
  `,
];

const stInfo = [
  `
• Collaborated remotely with a team of 9 Web Developers to design, plan, and build fully functional features

• Sculpted custom SQL queries with Knex to deliver data effectively throughout the application while minimizing API calls to the Postgres database

• Architected new database tables, seed files, and endpoints with the back-end team
`,
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1 className="lobster-font">My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectCard
          image={anywhere_fitness}
          title="Anywhere Fitness"
          repoLink="https://github.com/anywhere-fitness-tt2/Front-end"
          repoText="Anywhere Fitness Repo"
          frontText="Instructors can create virtual fitness classes that users can enroll in"
          backTitle="Front End Developer"
          subTitle="JavaScript | React | Redux"
          backText={afInfo}
        />
        <ProjectCard
          image={fp_service_tracker}
          title="Non-Profit Service Tracker"
          repoLink="https://github.com/NRHietala/family-promise-service-tracker-be-a"
          repoText="Service Tracker Repo"
          frontText="Employees can track services provided to recipients and create metrics"
          backTitle="Back End Developer"
          subTitle="Node | Express | Postgres"
          backText={stInfo}
        />
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
