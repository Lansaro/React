import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Form Validation: useReducer</h1>
      </header>
      <div className="App-body">
        <Form />
      </div>
    </div>
  );
}

export default App;
