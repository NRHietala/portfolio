import React from "react";
import { CardContainer, CardWrapper, Title } from "./SkillsElements";

const SkillCard = props => {
  const { id, title, tech } = props;
  return (
    <>
      <CardContainer id={id}>
        <CardWrapper>
          <Title>{title}</Title>
          {tech.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default SkillCard;
