import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Display from './components/Display';

function App() {
  const tabs = [
    { label: "Tab 1", content: "Fruits: Apples, Grapes, Oranges, Bananas" },
    { label: "Tab 2", content: "Veggies: Carrots, Cucumbers, Onions, Potatos" },
    { label: "Tab 3", content: "Sports: Football, Baseball, Basketball, Hokey" },
    { label: "Tab 4", content: "Companies: Google, Facebook, Apple, Adobe" },
  ]
  const [ allTabs, setAllTabs ] = useState(tabs);
  const [ currentIndex, setCurrentIndex ] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tabs</h1>
      </header>
      <div className="App-body">
        <Tabs 
          allTabs={ allTabs } 
          currentIndex={ currentIndex }
          setCurrentIndex={ setCurrentIndex } 
        />
        <Display
          allTabs={ allTabs }
          currentIndex={ currentIndex }
        />
      </div>
    </div>
  );
}

export default App;
