import React from "react";
import SkillCard from "./SkillCard";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsCardContainer,
  SkillH2,
} from "./SkillsElements";

import { FrontEnd, BackEnd, Tools } from "./SkillsData";

function Skills() {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <SkillH2>Skills</SkillH2>
          <SkillsCardContainer>
            <SkillCard {...FrontEnd} />
            <SkillCard {...BackEnd} />
            <SkillCard {...Tools} />
          </SkillsCardContainer>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
}

export default Skills;
