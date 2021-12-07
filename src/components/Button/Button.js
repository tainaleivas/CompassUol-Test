import React from 'react'
import { Btn } from './Button.styled';
import PropTypes from 'prop-types'

const Button = ({text, size, padding}) => {
  switch (size) {
    case "medium":
      padding="15px";
      break;
    case "large":
      padding="20px";
      break;
    case "x-large":
      padding="25px";
      break;
    default: 
      padding="10px";
      break;
  }

  return <Btn size={size} padding={padding}>{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string
}
Button.defaultProps = {
  size: ""
}

export default Button;