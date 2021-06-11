import React from "react";
import { FormInputLabel, FormMessageInput } from "./ContactElements";

const FormInput = props => {
  const { label, required, placeholder } = props;
  return (
    <>
      <FormInputLabel htmlFor={label}>
        <span>{label}:</span>
      </FormInputLabel>
      <FormMessageInput required={required} placeholder={placeholder} />
    </>
  );
};

export default FormInput;
