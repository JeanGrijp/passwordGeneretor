import { useContext } from "react";
import { CheckBoxContext } from "../../context/CheckContext";
import { ButtonContainer } from "./Button.style";

export function Button () {

  const {
    numbers, 
    char, 
    UpperCase, 
    text, 
    count,
    setPassword
  } = useContext(CheckBoxContext)

  const charASCII = [33, 35, 36, 37, 38, 40, 41, 43, 45, 47, 60, 61, 62, 63, 64]
  const numbersASCII = [48, 57]
  const upperASCII = [65, 90]
  const textASCII = [97, 122]

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const handleClick = () => {
    let result = ''
    let aux = []
    if (numbers) {
      aux.push('numbers')
      console.log(numbers);
    }
    if (char) {
      aux.push('char')
    }
    if (UpperCase) {
      aux.push('upper')
    }
    if (text) {
      aux.push('text')
    }

    if (aux.length === 0) {
      return "Gere uma nova senha"
    }

    for (let i = 0; i < count; i++) {
      const num = aux[getRandomInt(0, aux.length)]
      if (num === "numbers") {
        result += `${String.fromCharCode(getRandomInt(numbersASCII[0], numbersASCII[1]))}`
        console.log(`${String.fromCharCode(getRandomInt(numbersASCII[0], numbersASCII[1]))}`);
        // console.log('entrou no numbers');
      }
      if (num === "upper") {
        result += `${String.fromCharCode(getRandomInt(upperASCII[0], upperASCII[1]))}`
        // console.log('entrou no upper');
      }
      if (num === "text") {
        result += `${String.fromCharCode(getRandomInt(textASCII[0], textASCII[1]))}`
        console.log(`${String.fromCharCode(getRandomInt(textASCII[0], textASCII[1]))}`);
        // console.log('entrou no text');
      }
      if (num === "char") {
        console.log('entrou no char');
        console.log(`${String.fromCharCode(charASCII[getRandomInt(0, charASCII.length)])}`);
        result += `${String.fromCharCode(charASCII[getRandomInt(0, charASCII.length)])}`
      }
    }

    setPassword(result)

  }

  return (
    <ButtonContainer>
      <button 
      type="submit"
      onClick={handleClick}
      >Gerar senha</button>
    </ButtonContainer>
  )
}