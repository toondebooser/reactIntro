import{v4 as uuidv4}   from 'uuid'

const TodoListBuilder = ({todos}) => {
  // let array = [{id:1,name:'no storage',status:false}]
  // if (todos !== null) {
  //   array = todos
  // }
  return (
    <div className="todoList">
      <h3>List</h3>
      <ul>
       
        {todos.map((todos) => {

          return (
            <li key={uuidv4()}>
              <input
                className="checkbox"
                type="checkbox"
                name="todoItem"
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