import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
