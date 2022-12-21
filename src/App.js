import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome = "Diego"/>
      <SayMyName nome = "Gabriel"/>
      <SayMyName nome = {nome}/>
      <Pessoa 
      nome="Diego" 
      idade="28" 
      profissao="Dev" 
      foto="https://via.placeholder.com/150"/>
    </div>
    
  );
}

export default App;
