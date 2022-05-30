import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pokemon API: Randomized List</h1>
      </header>
      <div className="App-body">
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
