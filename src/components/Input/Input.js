import React from "react";
import PropTypes from "prop-types";
import { Field } from "./Input.styled";

const Input = ({ size, placeholder }) => {
  return (
    <>
      <Field size={size} placeholder={placeholder} />
    </>
  );
};

Input.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  size: "medium",
  placeholder: "Digite aqui",
};

export default Input;
