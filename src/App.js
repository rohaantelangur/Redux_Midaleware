import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Todo } from './Components/TodoApp/Todo';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Todo />}/>
     </Routes>
    </div>
  );
}

export default App;
