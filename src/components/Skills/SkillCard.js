import React from "react";
import { CardContainer, CardWrapper, Title } from "./SkillsElements";

const SkillCard = props => {
  const { title } = props;
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <Title>{title}</Title>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default SkillCard;
