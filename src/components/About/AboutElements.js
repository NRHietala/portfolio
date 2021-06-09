import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #010606;

  @media screen and (max-width: 768px) {
    padding: 100px 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 24px;
`;

export const InfoRow = styled.div`
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
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
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
  max-width: 500px;
  height: 100%;
  margin: 10px 0px;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0px;
`;
