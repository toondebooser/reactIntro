import { useRef, useState, useEffect } from "react";
import{v4 as uuidv4}   from 'uuid'



const storage_todo = "todoList";

const TodoForm = ({ todos, setTodos }) => {
  const userInput = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(storage_todo))
    if (storedTodos) {
        setTodos(storedTodos)
       console.log(storedTodos);}
    

  },[])

  useEffect(() => {
    if(todos !== null){
    localStorage.setItem(storage_todo, JSON.stringify(todos))
    }
  }, [todos]);

  const handleForm = (e) => {
    e.preventDefault();
    const name = userInput.current.value
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, status: false}]
    })
    userInput.current.value = null
      
    
  };

  return (
    <form className="todoInput" onSubmit={handleForm}>
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
