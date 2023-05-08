import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Counter = ({todos, setTodos}) => {
let counter = 0
todos.map((todo)=>( todo.status == true ? counter += 1 : counter += 0 ))
    return(
        <div className="counter">Todos done : {counter}</div>
    )

}
export default Counter