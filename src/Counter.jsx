
const Counter = ({todos}) => {
let counter = 0
todos.map((todo)=>( todo.status == true ? counter += 1 : counter += 0 ))
    return(
        <div className="counter">Todos done : {counter}</div>
    )

}
export default Counter