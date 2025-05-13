
import React, { useState } from 'react';
// import './App.css';
import './component/TodoList/Todo.css';
// import  Counter  from "./component/greetfun1/index.jsx";
// import ClassCounter from "./component/greetclass/ClassCounter.jsx";
import TodoList from './component/TodoList/TodoList.jsx';
import AddTodo from './component/TodoList/AddTodo.jsx';




function App() {

 const [todos, setTodos] = useState([
    { id: 1, text: 'Task1', completed: false },
    { id: 2, text: 'Task2', completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };



  return (
    // <div className="App">
    //   <Counter />
    //    <ClassCounter />
    // </div>

     <div className="app">
          <h1>Todo List</h1>
          <AddTodo onAdd={addTodo} />
          <TodoList 
            todos={todos} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
          />
        </div>
  );
}

export default App;