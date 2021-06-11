import React from "react";
import { FormInputLabel, FormMessageInput } from "./ContactElements";

const FormInput = props => {
  const { label, required, placeholder } = props;
  return (
    <>
      <FormInputLabel htmlFor={label}>
        <span>{label}:</span>
      </FormInputLabel>
      <FormMessageInput
        required={required}
        placeholder={placeholder}
        rows={3}
        cols={4}
        maxLength={295}
      />
    </>
  );
};

export default FormInput;
