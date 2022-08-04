import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import TodoStore from './Stores/TodoStore';

function App() {
  const [todo, setTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    TodoStore.addTodo(todo);
  };
  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">Add</button>
        </form>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
