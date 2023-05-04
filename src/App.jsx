import "./App.css";
import Todo from "./TodoCollection";
import TodoForm from "./TodoForm";

const App = () => {
  return (
    <div className="content">
      <div className="todoForm">{<TodoForm />}</div>
      <div className="todoList">{<Todo />}</div>
    </div>
  );
};

export default App;
