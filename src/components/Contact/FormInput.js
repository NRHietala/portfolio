import React from "react";

const FormInput = props => {
  const { label, type, required, placeholder } = props;
  return (
    <>
      <label>
        {label}:
        <input type={type} required={required} placeholder={placeholder} />
      </label>
    </>
  );
};

export default FormInput;
