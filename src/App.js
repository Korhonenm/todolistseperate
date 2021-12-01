import React, { useState } from 'react';
import './App.css';
import Todotable from './components/TodoTable';

function App() {
  const[todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo =(event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }


  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo, index) => index !== id)
    setTodos(updatedTodos)
  }


  return (
    <div className="App">
      <h1>Todolist</h1>
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input type="text" name="description" value={todo.description} onChange ={inputChanged} />
        <label>Date:</label>
        <input type="date" name="date" value={todo.date} onChange ={inputChanged} />
        <input type="submit" value="Add"/>
      </form>
     <Todotable todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
