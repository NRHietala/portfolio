import React from "react";
import { CardContainer, CardWrapper, Title, Skill } from "./SkillsElements";

const SkillCard = props => {
  const { id, title, tech } = props;
  return (
    <>
      <CardContainer id={id}>
        <CardWrapper>
          <Title className="lobster-font">{title}</Title>
          {tech.map((tech, index) => {
            return <Skill key={index}>{tech}</Skill>;
          })}
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default SkillCard;
