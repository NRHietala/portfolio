import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(50%);
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
`;

export const HeroH1 = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 40px;
  text-align: center;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 500px;
  max-height: 500px;
  height: 100%;
  margin: 10px;
`;

export const Img = styled.img`
  height: 90%;
  width: 90%;
  max-width: 360px;
  max-height: 400px;
  border-radius: 50%;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: ${props => props.theme.subText};
  font-size: 24px;
  text-align: center;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TypeWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
