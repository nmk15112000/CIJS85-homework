import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Enter your task here" classname="input"></input>
      <div classname="element">
        <input type="radio" />
        <label class="text">Clean up bedroom</label>
      </div>
      <div classname="element">
        <input type="radio" />
        <label class="text">Buy some milk</label>
      </div>
      <div classname="element">
        <input type="radio" />
        <label class="text">Jogging</label>
      </div>
      <div classname="element">
        <input type="radio" />
        <label class="text">Learn React</label>
      </div>
      <div classname="element">
        <input type="radio" />
        <label class="text">Doing exercises</label>
      </div>
      <footer>
        <p class="left">5 task left!</p>
        <p class="right">MindX todolist</p>
      </footer>
    </div>
    
  )
};
export default App; 