
import './App.css';
import Add from './Components/Add';
import Donelist from './Components/Donelist';
import Taskslist from './Components/Taskslist';
import Undonelist from './Components/Undonelist';

function App() {
  return (
    <div className="App">
      <Donelist />
      <Undonelist/>
      <Add/>
      <Taskslist />
    </div>
  );
}

export default App;
