import React from "react";
import { FormInputLabel, FormMessageInput } from "./ContactElements";

const FormInput = props => {
  const { label, name, required } = props;
  return (
    <>
      <FormInputLabel htmlFor={name}>
        <span>{label}:</span>
      </FormInputLabel>
      <FormMessageInput
        required={required}
        name={name}
        rows={3}
        cols={4}
        maxLength={295}
      />
    </>
  );
};

export default FormInput;
