import React from 'react'
import { Btn } from './Button.styled';
import PropTypes from 'prop-types'

const Button = ({type, text, size, padding, width}) => {
  switch (size) {
    case "medium":
      padding="10px 15px";
      width="7%";
      break;
    case "large":
      padding="10px 20px";
      width="9%";
      break;
    case "x-large":
      padding="10px 25px";
      width="11%";
      break;
    default: 
      padding="10px";
      width="5%";
      break;
  }

  return <Btn type={type} size={size} padding={padding} width={width}>{text}</Btn>;
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
}
Button.defaultProps = {
  type: 'Button',
  size: ""
}

export default Button;