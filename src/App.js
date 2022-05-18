import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);
  const [objArr, setObjArr] = useState([]);
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color === '' || height === '' || width === '') {
      setErr('Please fill in empty fields!')
    } else {
      const newObj = {
        backgroundColor: color.toLowerCase(),
        height: height + "px",
        width: width + "px"
      };
      const newArr = [...objArr, newObj];
      console.log(newArr);
      setObjArr(newArr);

      setColor('');
      setHeight(50);
      setWidth(50);
      setErr('')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Box Generator</h1>
      </header>
      <div className="App-body">
        <p>{ err }</p>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor='color'>Color</label>
              <input type='text' id='color' value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <div>
              <label htmlFor='height'>Height</label>
              <input type='number' id='height' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
              <label htmlFor='width'>Width</label>
              <input type='number' id='width' value={width} onChange={(e) => setWidth(e.target.value)}/>
            </div>
            <button>Add</button>
          </div>
        </form>
        <div id='boxes'>
          <Box objArr={ objArr }/>
        </div>
      </div>
    </div>
  );
}

export default App;
