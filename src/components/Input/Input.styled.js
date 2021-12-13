import styled from 'styled-components';

export const Field = styled.input`
  background-color: white;
  font-size: ${(props) => props.size};
  height: 2.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding-left: 10px;
  width: 40%;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  margin: 0 1%;
`;
