import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [dummy, setDummy] = useState('peanuts');
  const hanleChangeWord = () => {
    if (dummy === 'peanuts') {
      setDummy('butter');
    }  else {
      setDummy('peanuts');
    }
  };
  return (
    <div className="App">
        <h1>Dummy : {dummy}</h1>
        {/* <button onClick = {() => setDummy('butter')}>CHANGE WORD</button> */}
        {/* <button onClick = {() => dummy === 
          'peanuts' ? setDummy('butter') : setDummy('peanuts')}>CHANGE WORD</button> */}
        <button onClick = {hanleChangeWord}>CHANGE WORD</button>
        <Form />
    </div>
  );
}

export default App;
