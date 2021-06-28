import React from "react";
import { FormInputLabel, FormInput } from "./ContactElements";

const FormTextInput = props => {
  const { label, name, type, required, placeholder } = props;
  return (
    <>
      <FormInputLabel htmlFor={name}>
        <span>{label}:</span>
        <FormInput
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
        />
      </FormInputLabel>
    </>
  );
};

export default FormTextInput;
