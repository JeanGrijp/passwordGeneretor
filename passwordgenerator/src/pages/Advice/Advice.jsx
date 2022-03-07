import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import { AdvideContainer } from "./Advice.style"

export const Advice = () => {

  const [advice, setAdvice] = useState('a');

  async function handleClick () {
    const response = await axios.get('https://api.adviceslip.com/advice')
    console.log(response.data.slip.advice)
    setAdvice(response.data.slip.advice) 
  }

  return (
    <AdvideContainer>
      <h1 onClick={() => handleClick()}>{advice}</h1>
      {/* <button onClick={() => handleClick()}>Change</button> */}
    </AdvideContainer>
  )
}

