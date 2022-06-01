import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const users = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black"
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown"
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown"
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Brown"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Prop it up</h1>
      </header>
      <div className="App-body">
        {users.map((user, index) => {
          return (
            <div key={index}>
              <PersonCard props = { user } />
            </div>
        )})}
      </div>
    </div>
  );
}

export default App;
