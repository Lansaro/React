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
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" />
            <a href="https://github.com/Lansaro/React/tree/FirstReactJSX">github repo</a>
            <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="github icon" />
            <a href="https://www.linkedin.com/in/leotishin/">my linkedin</a>
            <img src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/007/822/original/email.png?1632676007" alt="email icon" />
            <a href="mailto:leonidtsh@gmail.com">my email</a>
          </div>
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
