import styled from 'styled-components';

export const Btn = styled.button`
  color: white;
  border-radius: 50px 0px;
  border: none;
  background: linear-gradient(90deg, #614e65 0%, #7a4e65 100%);
  padding: ${props => (props.padding)};
  width: 15%;
  font-size: ${props => props.size};
  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #614e65 100%, #7a4e65 0%);
    transition: 0.6ms;
  }
`;