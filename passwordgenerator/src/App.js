import './App.css';
import { AppContainer } from './App.style';
import { CheckBoxCOntextProvider } from './context/CheckContext';
import { Button } from './pages/ButtonGenerator/Button';
import { CheckBox } from './pages/CheckBox/Checkbox';
import { InputArea } from './pages/InputArea/InputArea';

function App() {
  return (
    <CheckBoxCOntextProvider>
      <AppContainer>
        <h1>Gerador de Senha</h1>
        <InputArea/>
        <CheckBox />
        <Button/>
      </AppContainer>
    </CheckBoxCOntextProvider>
  );
}

export default App;
