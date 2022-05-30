import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Routing Practice</h1>
        </header>
        <div className="App-body">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Display />} />
            <Route path='/:id/:color1/:color2' element={<Display />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



// 4. localhost:3000/hello/blue/red: This should display the word "hello" in blue text with a red background. It should work with any other valid word and colors.