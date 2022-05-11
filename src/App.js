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
      <body>
        <div>
          <h2>Counter: {counter}</h2>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={decreaseCounter}>Decrement</button>
        </div>
        {beatles.map((beatle, index) => {
          return (
            <Beatle
              name={beatle.name}
              instrument={beatle.instrument}
              likes={beatle.like}
              writesMusic={beatle.writesMusic}/>)
        })}
      </body>
    </div>
  );
}

export default App;
