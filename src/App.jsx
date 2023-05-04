import "./App.css";
import TodoForm from "./TodoForm";
import TodoListBuilder from "./TodoListBuilder";
import { useRef, useState,useEffect } from "react";


const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="content">
      <div className="todoForm">{<TodoForm todos={todos} setTodos={setTodos} />}</div>
      <div className="todoList">{<TodoListBuilder todos={todos} />}</div>
    </div>
  );
};

export default App;
