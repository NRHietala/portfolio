import styled from "styled-components";

export const SkillsContainer = styled.section`
  color: #fff;
  background: #010606;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  min-height: 400px;
  max-height: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 24px;
`;

export const SkillsCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 0px 24px;
`;

export const SkillH2 = styled.h2`
  color: #ef0195;
  font-size: 40px;
  text-align: center;
  padding: 10px 0px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 27px;
  }
`;

///////////////// SkillCard Style Elements /////////////////

export const CardContainer = styled.div`
  width: 250px;
  padding: 20px;
`;

export const CardWrapper = styled.div``;

export const Title = styled.h3`
  text-align: center;
  color: #40e0d0;
  font-size: 28px;
  padding: 4px 7px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Skill = styled.li`
  list-style-type: none;
  text-align: center;
  font-size: 18px;
  padding: 3px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
