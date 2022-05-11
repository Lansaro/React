import logo from './logo.svg';
import './App.css';
import Beatle from './components/Beatle.js';
import { useState } from 'react';

function App() {

  const beatles = [
    {
      name: "John",
      instrument: "piano",
      like: 11,
      writesMusic: true,
    },
    {
      name: "Jack",
      instrument: "guitar",
      like: 25,
      writesMusic: true,
    },
    {
      name: "Elly",
      instrument: "drums",
      like: 34,
      writesMusic: false,
    },
    {
      name: "George",
      instrument: "guitar",
      like: 12,
      writesMusic: true,
    },
  ];
  const [counter, setCounter] = useState(0);
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>First React with JSX</h1>
      </header>
      <body className="App-body">
        <div>
          <h2>Counter: {counter}</h2>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={decreaseCounter}>Decrement</button>
        </div>
        <div>
          {beatles.map((beatle, index) => {
            return (
              <Beatle
                name={beatle.name}
                instrument={beatle.instrument}
                likes={beatle.like}
                writesMusic={beatle.writesMusic}/>)
          })}
        </div>
      </body>
    </div>
  );
}

export default App;
