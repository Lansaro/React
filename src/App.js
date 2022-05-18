import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [skill, setSkill] = useState('');
  const[skillArr, setSkillArr] = useState([]);
  const handleSubmitSkill = (e) => {
    e.preventDefault();
    console.log('trig');
    const newSkillObj = {
      skill: skill,
      level: 1,
    };
    console.log(newSkillObj);
    // NOT THIS!!!
    // skillArr.push(newSkillObj);
    const newSkillArr = [...skillArr, newSkillObj];
    console.log(newSkillArr);
    setSkillArr(newSkillArr);
  };
  const handleIncreaseSkill = (indexFromBelow) => {
    // get object by index (unique identifier)
    const skillObj = {...skillArr[indexFromBelow]}; //copy of the object
    console.log(skillObj);
    // increment skill level
    skillObj.level++;
    // reset skillArr
    const arrAfterIndex = [...skillArr.slice(indexFromBelow + 1)];
    const arrBeforeIndex = [...skillArr.slice(0, indexFromBelow)];
    console.log(arrAfterIndex);
    console.log(arrBeforeIndex);
    setSkillArr([...skillArr.slice(0, indexFromBelow), skillObj].concat(arrAfterIndex));
  };
  const handleDeleteSkill = (indexFromBelow) => {
    const filteredArray = [...skillArr].filter((skill, index) => index !== indexFromBelow);
    setSkillArr(filteredArray);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CRUD</h1>
      </header>
      <div className="App-body">
        <form onSubmit={handleSubmitSkill}>
          <div>
            Skill Name:
            <input
              type='text'
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
            />
          </div>
          <button type='submit'>Add Skill</button>
        </form>
        <h2>SKILLS</h2>
        {skillArr.map((skillObj, index) => {
          return <div key={index}>
            <p>Skill: {skillObj.skill}</p>
            <p>Level: {skillObj.level}</p>
            <button onClick={() => handleIncreaseSkill(index)}>Increment Skill Level</button>
            <button onClick={() => handleDeleteSkill(index)}>Delete</button>
            <hr />
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
