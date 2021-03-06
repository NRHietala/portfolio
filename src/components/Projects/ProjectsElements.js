import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.bgColor};
  padding-top: 50px;

  @media screen and (max-width: 768px) {
    height: 1100px;
    padding: 0px 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    height: 1200px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  max-width: 1200px;
  align-items: center;
  grid-gap: 16px;
  padding: 0px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0px 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  position: relative;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 200px;
  width: 280px;
  margin-bottom: 10px;

  @media screen and (max-width: 410px) {
    height: 140px;
    width: 190px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 25px;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${props => props.theme.secondary};
  white-space: pre-line;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${props => props.theme.primary};

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${props => props.theme.subText};
  white-space: pre-line;
  padding: 10px 0px;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const FrontSide = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const RepoLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  padding: 6px 15px;
  border-radius: 50px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.subText};
    color: ${props => props.theme.bgColor};
  }
`;

export const BackSide = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
`;

export const Btn = styled.button`
  border-radius: 50px;
  background: ${props => props.theme.primary};
  white-space: nowrap;
  padding: 10px 20px;
  color: ${props => props.theme.bgColor};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.subText};
  }
`;
