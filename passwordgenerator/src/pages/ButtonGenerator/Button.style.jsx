import styled from "styled-components";

export const ButtonContainer = styled.section`
  width: 60%;
  background-color: #042c00;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-weight: 500;
    background-color: #008000;
  }

  button:active {
    background-color: #002700;
  }
`;