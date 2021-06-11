import React, { useState } from "react";
import FormTextInput from "./FormInput";
import FormMessageInput from "./FormMessageInput";

import {
  FormContainer,
  FormWrapper,
  FormInputWrapper,
  BtnWrap,
  Btn,
} from "./ContactElements";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormWrapper>
        <FormInputWrapper>
          <FormTextInput
            label="Name"
            type="text"
            required={true}
            placeholder="Enter Your Name"
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormTextInput
            label="Email"
            type="email"
            required={true}
            placeholder="Enter Your Email"
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormMessageInput
            label="Message"
            required={true}
            placeholder="Send a Message!"
          />
        </FormInputWrapper>
        <BtnWrap>
          <Btn type="submit">{status}</Btn>
        </BtnWrap>
      </FormWrapper>
    </FormContainer>
  );
};

export default ContactForm;
