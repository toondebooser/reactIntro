import "./App.css";
import TodoForm from "./TodoForm";
import TodoListBuilder from "./TodoListBuilder";
import Counter from "./Counter";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="content">
      <Counter todos={todos} />
      <div className="todoForm">
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
      <div className="todoList"><TodoListBuilder todos={todos} setTodos={setTodos}/></div>
    </div>
  );
};

export default App;
