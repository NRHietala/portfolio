import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: ${props => props.theme.bgFooter};
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  max-width: 1500px;
  margin: 0px auto;
`;

export const Contact = styled.section`
  max-width: 1500px;
  width: 100%;
`;

export const ContactWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 20px auto 0px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const ContactLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  color: ${props => props.theme.primary};
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const WebRights = styled.small`
  color: ${props => props.theme.subText};
  margin-bottom: 16px;
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactIconLink = styled.a`
  color: ${props => props.theme.subText};
  padding: 0px 5px;
  font-size: 24px;
`;
