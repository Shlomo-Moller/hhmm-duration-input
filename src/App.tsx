import {HhMmDurationInput} from './components/HhMmDurationInput/HhMmDurationInput';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <form>
        <label htmlFor="duration-control">Duration:</label>
        <HhMmDurationInput inputId='duration-control' />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
