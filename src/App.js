
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoActions , RemoveTodoActions} from './actions/TodoActions';

import './App.css';

function App() {
  const [todo, setTodo ] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoActions(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoActions(t))
  }

  const Todo = useSelector(state => state.Todo)

  const {todos} = Todo
  

  return (
    <div className="App">
      <header className="App-header">
         <h2>TodoList Application using redux</h2>
         <form onSubmit={handleSubmit}>
          <input placeholder='Enter todo' className ="input-style" onChange={(e) => setTodo(e.target.value)}/>
          <button type='submit' className='go-btn'>Go</button>
         </form>
         <ul>
          {todos && todos.map(t => (
          <li key={t.id} className='todo-text'>
            <span >{t.todo}</span>
            <button  className = "del-btn" onClick={() => removeHandler(t)}>Delete</button>
          </li>))}
         </ul>
      </header>
    </div>
  );
}

export default App;
