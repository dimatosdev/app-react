import './App.css';
import OutherList from './components/OutherList';


function App() {

  const myItens = ['react', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutherList itens={myItens}/>
      <OutherList itens={[]}/>
    </div>
    
  );
}

export default App;
