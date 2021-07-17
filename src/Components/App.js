import React, { useState, useEffect } from "react"  //Using React Hooks to use a state in a functional component and store and retrive local storage data
import './App.css';
import Header from "./Header"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

function App() {
  const LOCAL_STORAGE_KEY = "todos"
  const [todos, setTodos] = useState([]) //Initially the todos will be an empty array

  const addTodoHandler = (todo) => {
    console.log(todo)
    setTodos([...todos, todo])
  }

  useEffect(() => {
    const retrieveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveTodos)
      setTodos(retrieveTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  return (
    <div className="ui container">
      <Header />
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />  {/* pass props as the property of TodoList componet to render */}
    </div>
  );
}

export default App;
