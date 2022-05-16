import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from "./components/Profile.js";

function App() {
  const profiles = [
    {
      fName: "Jane",
      lName: "Doe",
      age: 45,
      hairColor: "Black",
    },
    {
      fName: "John",
      lName: "Smith",
      age: 88,
      hairColor: "Brown",
    },
    {
      fName: "Jack",
      lName: "Reacher",
      age: 35,
      hairColor: "Blond",
    },
    {
      fName: "James",
      lName: "Wilson",
      age: 43,
      hairColor: "Brown",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Putting it Together</h1>
      </header>
      <div className="App-body">
        <div>
          {profiles.map((profile, index) => {
            return (
              <Profile
                fName={profile.fName}
                lName={profile.lName}
                age={profile.age}
                hairColor={profile.hairColor}/>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
