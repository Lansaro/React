import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [task, setTask] = useState('');
  const [taskArr, setTaskArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task: task,
      complete: false
    };
    const newArr = [...taskArr, newTask];
    setTaskArr(newArr);
    console.log(newTask);
    setTask('');
  };
  const handleCheckTask = (i) => {
    const taskObj = {...taskArr[i]};
    if (taskObj.complete === false) {
      taskObj.complete = true
    } else {taskObj.complete = false};
    console.log('Checked... ', taskObj.complete)
    setTaskArr([...taskArr.slice(0, i), taskObj].concat(taskArr.slice(i + 1)));
  };
  const handleDeleteTask = (i) => {
    const filterTaskArr = [...taskArr].filter((task, index) => index !== i);
    setTaskArr(filterTaskArr);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>To Do List</h1>
      </header>
      <div className="App-body">
        <Form
          handleSubmit={handleSubmit}
          task={task}
          setTask={setTask}
        />
        <Display
          taskArr={taskArr}
          handleCheckTask={handleCheckTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
