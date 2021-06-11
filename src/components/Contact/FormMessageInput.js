import React from "react";

const FormInput = props => {
  const { label, required, placeholder } = props;
  return (
    <>
      <label>
        {label}:
        <textarea required={required} placeholder={placeholder} />
      </label>
    </>
  );
};

export default FormInput;
