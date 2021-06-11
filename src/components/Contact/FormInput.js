import React from "react";
import { FormInputLabel, FormInput } from "./ContactElements";

const FormTextInput = props => {
  const { label, type, required, placeholder } = props;
  return (
    <>
      <FormInputLabel htmlFor={label}>
        <span>{label}:</span>
      </FormInputLabel>
      <FormInput type={type} required={required} placeholder={placeholder} />
    </>
  );
};

export default FormTextInput;
