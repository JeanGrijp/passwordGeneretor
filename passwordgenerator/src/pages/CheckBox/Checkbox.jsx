import { Checkbox } from 'antd';
import { useContext } from 'react';
import { CheckBoxContext } from '../../context/CheckContext';
import { CheckBoxContainer, CheckBoxSection } from './Checkbox.style';

export function CheckBox () {

  const {
    numbers, 
    setNumbers, 
    char, 
    setChar, 
    UpperCase, 
    setUpperCase, 
    text, 
    setText, 
    count, 
    setCount
  } = useContext(CheckBoxContext)

  const labelNumbers = `Números ${numbers ? 'Checked' : 'Unchecked'}`;
  const labelChar = `Characteres ${char ? 'Checked' : 'Unchecked'}`;
  const labelUpperCase = `Maiúsculas ${UpperCase ? 'Checked' : 'Unchecked'}`;
  const labeltext = `Minúsculas ${text ? 'Checked' : 'Unchecked'}`;

  return (
    <CheckBoxContainer>
      <CheckBoxSection>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={numbers}
          onChange={() => {
            setNumbers(!numbers)
          }}
        >
          {labelNumbers}
        </Checkbox>
      </p>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={char}
          onChange={() => {
            setChar(!char)
          }}
          >
          {labelChar}
        </Checkbox>
      </p>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={UpperCase}
          onChange={() => {
            setUpperCase(!UpperCase)
          }}
          >
          {labelUpperCase}
        </Checkbox>
      </p>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={text}
          onChange={(e) => {
            console.log(e.target.checked)
            setText(e.target.checked)
            console.log('Text Mudou para ', text)
          }}
          >
          {labeltext}
        </Checkbox>
      </p>
      <section>
        <label htmlFor="Count">Quantidade de caracteres</label>
        <input 
        type="number" 
        name="Count" 
        id="" 
        min={1} 
        max={50}
        value={count} 
        onChange={(e) => setCount(e.target.value)}
        />
      </section>
      </CheckBoxSection>
    </CheckBoxContainer>
  );
}


