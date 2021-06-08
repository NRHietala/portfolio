import React from "react";
import Icon1 from "../../assets/images/svg-1.svg";
import Icon2 from "../../assets/images/svg-2.svg";
import Icon3 from "../../assets/images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="projects">
      <ServicesH1>My Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Project #1</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            cum.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Project #2</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            voluptas?
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Project #3</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            unde.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
