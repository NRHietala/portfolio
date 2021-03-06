import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  Contact,
  ContactWrap,
  ContactLogo,
  WebRights,
  ContactIcons,
  ContactIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <Contact>
          <ContactWrap>
            <ContactLogo to="/" onClick={toggleHome} className="lobster-font">
              NH
            </ContactLogo>
            <WebRights>
              NH © {new Date().getFullYear()} All Rights Reserved.
            </WebRights>
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
          </ContactWrap>
        </Contact>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
