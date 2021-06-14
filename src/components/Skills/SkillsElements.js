import styled from "styled-components";

export const SkillsContainer = styled.section`
  color: #fff;
  background: #010606;
  min-height: 500px;
  max-height: 900px;

  @media screen and (max-width: 768px) {
    padding: 80px 0px 0px 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0px 0px 0px;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 24px 10px 24px;
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
  font-size: 2.5rem;
  text-align: center;
  padding: 10px 0px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
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
`;

export const Skill = styled.li`
  list-style-type: none;
  text-align: center;
  font-size: 18px;
  padding: 3px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
