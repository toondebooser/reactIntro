const storedTodos = ['no storage', 'test'];

const Todo = () => {
  return (
    <div className="todoList">
      <h3>List</h3>
      <ul>
        {storedTodos.map((todos, index) => {

          return (
            <li key={index}>
              <input
                className="checkbox"
                type="checkbox"
                name="todoItem"
                id={index}
              />
              {todos}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;
