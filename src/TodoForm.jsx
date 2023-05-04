import { useRef, useState,useEffect } from "react";
  
const storage_todo = 'todoApp.todos'

const TodoForm = () => {
  const userInput = useRef("");
  const [Todo, setTodo] = useState( ['test','test2']);

  useEffect(() => {
 
  }, []);

  
  const handleForm = (e) => {
    e.preventDefault();
    
}

  return (
    <form className="todoInput" onSubmit={handleForm}>
      <label htmlFor="tinputField">{Todo.length}</label>
      <input
        ref={userInput}
        name="tinputField"
        className="inputField"
        type="text"
        placeholder="Add a new todo"
      />
      <br />
      <input className="submitButton" type="submit" value="Add todo" />
    </form>
  );
};
export default TodoForm;
