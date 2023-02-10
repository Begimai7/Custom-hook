import './App.css';
import { Counter } from './components/counter/Counter';
import { Inputs } from './components/inputs/Inputs';

function App() {

  return (
    <div className="App">
      <Inputs/>
      <Counter/>
      {/* <Timer/> */}
    </div>
  );
}

export default App;
