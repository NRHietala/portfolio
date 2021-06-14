import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import {
  Card,
  FrontSide,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  BackSide,
  Subtitle,
  BtnWrap,
  Btn,
  RepoLink,
} from "./ProjectsElements";

const ProjectCard = props => {
  const {
    image,
    title,
    repoLink,
    repoLabel,
    frontText,
    backTitle,
    subTitle,
    backText,
  } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setisHovering] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseHover = () => {
    setisHovering(!isHovering);
  };

  return (
    <Card onMouseOver={handleMouseHover}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontSide>
          <ProjectsIcon src={image} />
          <ProjectsH2>{title}</ProjectsH2>
          <RepoLink href={repoLink} target="_blank" aria-label={repoLabel}>
            GitHub Repo
          </RepoLink>
          <ProjectsP>{frontText}</ProjectsP>
          <BtnWrap>
            <Btn onClick={handleClick}>Details</Btn>
          </BtnWrap>
        </FrontSide>
        <BackSide>
          <ProjectsH2>{backTitle}</ProjectsH2>
          <Subtitle>{subTitle}</Subtitle>
          <ProjectsP>{backText}</ProjectsP>
          <BtnWrap>
            <Btn onClick={handleClick}>Overview</Btn>
          </BtnWrap>
        </BackSide>
      </ReactCardFlip>
    </Card>
  );
};

export default ProjectCard;
