import React from "react";
import Image from "../../assets/images/whoami.svg";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>WhoAmI?</TopLine>
                <Heading>Nathan Hietala</Heading>
                <Subtitle>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  quo id sit maxime nesciunt repudiandae cum ratione, asperiores
                  doloribus deserunt voluptate veniam. Similique amet delectus
                  distinctio animi cumque eveniet, repudiandae dolore porro nam
                  odio nobis deleniti facilis illum quia! Accusamus quia numquam
                  similique unde perspiciatis doloremque, excepturi fuga saepe
                  totam!
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Image} alt="question mark" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;
