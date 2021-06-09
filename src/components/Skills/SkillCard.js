import React from "react";
import { CardContainer, CardWrapper, Title } from "./SkillsElements";

const SkillCard = props => {
  const { id, title } = props;
  return (
    <>
      <CardContainer id={id}>
        <CardWrapper>
          <Title>{title}</Title>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default SkillCard;
