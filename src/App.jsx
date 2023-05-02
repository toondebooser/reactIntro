import './App.css'
import TodoList from './TodoCollection';
import TodoForm from './TodoForm';

const App = () => {

  return (

    
    <div className="todoList">
      <h3>List</h3>
       <ul>
         {TodoList.map((todo, index) =>(
          <li key={index}>{todo}</li>
         ))}
       </ul>
    </div>
    
  )
}

export default App
