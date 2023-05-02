const TodoForm = () =>{
    return (
    <form  method="post" action="">
        <input className="inputField" type="text" placeholder="Add a new todo" /><br />
        <input className="submitButton" type="submit" value="Add todo" />
    </form>
    )
}
export default TodoForm;