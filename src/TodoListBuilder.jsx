import { v4 as uuidv4 } from "uuid";

const TodoListBuilder = ({ todos, setTodos }) => {
  
 
      const handleDelete = (deleteTodo) => {
        const keepTodos = todos.filter((todos)=> todos.id !== deleteTodo.id);
        setTodos(keepTodos)
      }
      
      const handleCheck = (id)=>{
        // const checkedTodo = todos.filter((todos)=> todos.id == checkTodo.id);
        const findTodo = todos.find((todo)=> todo.id == id)
        if (findTodo) {
          const checkTodo = {...findTodo, status: !findTodo.status};
          const addTodo = todos.map((todo)=>
          todo.id === id ? checkTodo : todo)

          setTodos(addTodo)
        }

       
      }
  return (
    <div className="todoList">
      <h3>List</h3>
      <ul>
        {todos.map((todos) => {
          return (
            <li key={uuidv4()}>
              <button className="deleteButton" onClick={()=>handleDelete(todos)}>delete</button>
              <input
                className="checkbox"
                type="checkbox"
                name="todoItem"
                onChange={()=> handleCheck(todos.id)}
                defaultChecked={todos.status}
              />
              {todos.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoListBuilder;
