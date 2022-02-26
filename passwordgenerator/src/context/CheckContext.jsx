import { createContext, useState } from "react";

export const CheckBoxContext = createContext()

export const CheckBoxCOntextProvider = ({children}) => {

  const [numbers, setNumbers] = useState(false);
  const [char, setChar] = useState(false);
  const [UpperCase, setUpperCase] = useState(false);
  const [text, setText] = useState(false);
  const [password, setPassword] = useState('Gere uma nova senha');
  const [count, setCount] = useState(1);

  return (
    <CheckBoxContext.Provider value={{
      numbers, 
      setNumbers, 
      char, 
      setChar, 
      UpperCase, 
      setUpperCase, 
      text, 
      setText,
      count, 
      setCount, 
      password, 
      setPassword}}>
        {children}
    </CheckBoxContext.Provider>
  )
}