import styled from "styled-components";

export const SkillsContainer = styled.section`
  color: #fff;
  background: lightblue;
  // bg color #010606
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 24px;
`;

export const SkillsCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const SkillH2 = styled.h2`
  color: #ef0195;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CardContainer = styled.div``;

export const CardWrapper = styled.div``;

export const Title = styled.h3`
  background: orange;
`;
