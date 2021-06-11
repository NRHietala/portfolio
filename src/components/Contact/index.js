import React from "react";
import Image from "../../assets/images/contact.svg";
import ContactForm from "./ContactForm";

import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  TextWrapper,
  TopLine,
  Column2,
  ImgWrap,
  Img,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactRow>
            <Column1>
              <ImgWrap>
                <Img src={Image} alt="contact options" />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>Let's Get In Touch!</TopLine>
              </TextWrapper>
              <ContactForm />
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
