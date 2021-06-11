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
  Subtitle,
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
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
