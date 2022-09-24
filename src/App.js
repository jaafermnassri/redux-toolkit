
import './App.css';
import Add from './Components/Add';
import Donelist from './Components/Donelist';
import Taskslist from './Components/Taskslist';
import Undonelist from './Components/Undonelist';

function App() {
  return (
    <div className="App">
      <div className='heder'>
      <Add/>
        <div className='donundon'>
        <Donelist />
        <Undonelist/>
        </div>
      </div>
      <Taskslist />
    </div>
  );
}

export default App;
