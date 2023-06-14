import { useState } from "react";
import './RenderedTodo.css';

const RenderedTodo = ({users, onItemClick, onCheckValue, todos, onDisplay}) => {
    const [checked, setChecked] = useState('')

    const checkboxHandler = event =>{
        setChecked(event.target.value);
        
    }

    const checkItem= (idToMatch) => {
        onItemClick(idToMatch);
    }
    
    const specificTodo = todos.filter(todo => todo.name === onDisplay.name)
 
 return (
    <ul>
       {specificTodo.map((todo) => {
            return <div key={Math.random()}>
                <li key={todo.id} onClick={() => {checkItem(todo.id)}} style={{textDecoration: todo.selected ? 'line-through' : 'none'}}>
                <input type='checkbox' id='checkbox' checked={todo.selected} onChange={checkboxHandler} />
                    {todo.task}
                </li>
                </div>
            
       }) }
    </ul>
 )
};

export default RenderedTodo;