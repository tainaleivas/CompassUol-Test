import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-direction: column;
  button:first-child {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1% 1% 0 0;
  }
  img {
    width: 10%;
    margin-top: 3%;
  }
`;

export const BoxSearch = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2%;
`;
