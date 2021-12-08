import styled from 'styled-components';

export const Field = styled.input`
  background-color: transparent;
  font-size: ${props => props.size};
  height: 2.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding-left: 10px;
  width: 40%;
  border-radius: 10px;
  margin: 0 1%;
`;