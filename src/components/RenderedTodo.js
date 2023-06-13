import { useState } from "react";
import './RenderedTodo.css';

const RenderedTodo = ({users, onItemClick, onCheckValue}) => {
    const [checked, setChecked] = useState('')

    const checkboxHandler = event =>{
        setChecked(event.target.value);
        
    }

    const checkItem= (checked) => {
        onItemClick(checked);
    }
    

 return (
    <ul>
           { console.log(users.todos)}
            {users.todos.map((todo) => {
                return  <div key={Math.random()}>
                <li key={todo.id} onClick={() => {checkItem(todo.id)}} style={{textDecoration: todo.selected ? 'line-through' : 'none'}}>
                     <input type='checkbox' id='checkbox'  checked={todo.selected} onChange={checkboxHandler}/>
                      {todo.task}
                </li>
                </div>
            })}
    </ul>
 )
};

export default RenderedTodo;