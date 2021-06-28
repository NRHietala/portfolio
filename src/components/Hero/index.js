import React, { useState } from "react"; //eslint-disable-line
import Video from "../../assets/videos/video.mp4";
import TypeWriterEffect from "react-typewriter-effect";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  ImgWrap,
  Img,
  HeroP,
  TypeWrap,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ImgWrap>
          <Img
            src={process.env.PUBLIC_URL$ + "/tinypic.jpg"}
            alt="nathan hietala"
          />
        </ImgWrap>
        <HeroH1 className="lobster-font">Hi, I'm Nate</HeroH1>
        <TypeWrap>
          <TypeWriterEffect
            textStyle={{
              color: "#ef0195",
              fontWeight: 400,
              fontSize: "1.2em",
              textAlign: "center",
              fontFamily: "'Encode Sans Expanded', sans-serif",
            }}
            startDelay={2000}
            cursorColor="#fff"
            multiText={[
              "I enjoy creating things that live on the web",
              "I'm a problem solver",
              "I'm passionate about learning new things",
              "I'm a Full Stack Web Developer",
            ]}
            multiTextDelay={1700}
            typeSpeed={80}
            loop="true"
          />
        </TypeWrap>
        <HeroP>
          I'm a full stack web developer with a passion for learning new things
          and finding creative ways to solve real world problems with code!
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
