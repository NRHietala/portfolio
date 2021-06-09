import React from "react";
import SkillCard from "./SkillCard";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsCardContainer,
  SkillH2,
} from "./SkillsElements";

function Skills() {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <SkillH2>Skills</SkillH2>
          <SkillsCardContainer>
            <SkillCard title="title" />
          </SkillsCardContainer>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
}

export default Skills;
