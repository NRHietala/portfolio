import React from "react";
import emailjs from "emailjs-com";
import FormTextInput from "./FormTextInput";
import FormMessageInput from "./FormMessageInput";

import {
  FormContainer,
  FormWrapper,
  FormInputWrapper,
  BtnWrap,
  Btn,
} from "./ContactElements";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    // Don't worry, none of this is sensitive data 🙂
    emailjs
      .sendForm(
        "gmail",
        "template_k971q2q",
        e.target,
        "user_7HtPDHs72LPcDXNsBRIWU"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <FormContainer onSubmit={sendEmail}>
      <FormWrapper>
        <FormInputWrapper>
          <FormTextInput
            label="Name"
            name="name"
            type="text"
            required={true}
            placeholder="Enter Your Name"
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormTextInput
            label="Email"
            name="email"
            type="email"
            required={true}
            placeholder="Enter Your Email"
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormMessageInput label="Message" name="message" required={true} />
        </FormInputWrapper>
        <BtnWrap>
          <Btn>Send</Btn>
        </BtnWrap>
      </FormWrapper>
    </FormContainer>
  );
};

export default ContactForm;
