import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "../../assets/images/whoami.svg";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  ContactWrap,
  ContactIcons,
  ContactIconLink,
  BtnWrap,
  Btn,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Heading className="lobster-font">Nathan Hietala</Heading>
                <Subtitle>
                  Who am I? All philosophical arguments aside, I'm presently a
                  career changer breaking into tech. I've always been a problem
                  solver working to find solutions to overcome obstacles, and
                  now I do it with code!
                </Subtitle>
              </TextWrapper>
              <ContactWrap>
                <TopLine>Check out my other profiles</TopLine>
                <ContactIcons>
                  <ContactIconLink
                    href="//www.linkedin.com/in/nrhietala/"
                    target="_blank"
                    aria-label="LinkedIn link"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </ContactIconLink>
                  <ContactIconLink
                    href="//www.github.com/nrhietala"
                    target="_blank"
                    aria-label="Github link"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </ContactIconLink>
                </ContactIcons>
                <BtnWrap>
                  <Btn
                    href="https://drive.google.com/file/d/1gpHT_yp3q7gtsW5ocn7GAItCioCC4Nsz/view?usp=sharing"
                    target="_blank"
                    aria-label="resume link"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </Btn>
                </BtnWrap>
              </ContactWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Image} alt="question mark" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
