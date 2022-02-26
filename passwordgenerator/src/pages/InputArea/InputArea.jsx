import { useContext } from "react";
import { CheckBoxContext } from "../../context/CheckContext";
import { InputAreaContainer, InputAreaSection } from "./InputArea.style";

export function InputArea () {

  const {password} = useContext(CheckBoxContext)

  return(
    <InputAreaContainer>
      <InputAreaSection>
        <p>{password}</p>
      </InputAreaSection>
    </InputAreaContainer>
  )
}