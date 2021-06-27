import styled from "styled-components";

export const AboutContainer = styled.section`
  color: #fff;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 500px;
    padding: 20px 0px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  height: 700px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 24px;

  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${`'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${`'col1' 'col2'`};
    align-content: center;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0px 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0px 15px;
  max-width: 625px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 20px;
  text-align: center;
`;

export const TopLine = styled.p`
  color: #ef0195;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  font-weight: 600;
  color: #40e0d0;
  letter-spacing: 2px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 600px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin: 10px 0px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 10px 0px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactIconLink = styled.a`
  color: #fff;
  font-size: 30px;
  padding: 0px 5px;
`;
