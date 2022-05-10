import logo from './logo.svg';
import './App.css';
import React from 'react';
// import backgroundImage from "./components/backgroundImage.png";

function App() {
  return (
    <div className="App">
      {/* styles={{ backgroundImage:`url(${backgroundImage})`, backgroundSize: 'cover' }}> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>First React with JSX</h1>
      </header>
      <body className="App-body">
        <div>
          <h2>Hello Dojo!</h2>
          <h5>Things I need to do:</h5>
          <ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
          </ul>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/CRfJyDDsH5U?mute=1&autoplay=1" width="100%" height="450px" frameborder="0" allow="autoplay; encrypted-media">
          </iframe>
        </div>
      </body>
    </div>
  );
}

export default App;
