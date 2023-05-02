const TodoList = [
    "Learn react",
    "Make form to add new Todo",
    "Render all Todo's in a list",
    "Build & deploy app"
]

const Todo = () =>{
return (

    <div className="todoList">
      <h3>List</h3>
       <ul>
         {TodoList.map((todo, index) =>{
            //log to see how map works
        console.log("Todo:", todo,"/index", index);
        return( <li key={index}>{todo}</li>
        )
})}
       </ul>
    </div>
    
  )
         }
export default Todo;