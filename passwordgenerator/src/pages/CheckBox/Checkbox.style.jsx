import styled from "styled-components";

export const CheckBoxContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CheckBoxSection = styled.section`
  width: 60%;
  min-width: 200px;
  background-color: #042c00;
  color: #FFFFFF;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-family: 'Outfit', sans-serif;
    font-size: 80%;
  }
  
  section {
    /* border: 1px solid red; */
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    label {
      font-family: 'Outfit', sans-serif;
      font-size: 80%;
    }

    input {
      width: 40px;
      border-radius: 5px;
      outline: none;
      text-align: center;
      font-size: 1rem;
      font-weight: 600;
    }

  }



`;