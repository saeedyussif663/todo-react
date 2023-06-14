
import RenderedTodo from "./RenderedTodo"
import InputTodo from "./InputTodo"
import './Todo.css'
import { useState } from "react"

const Todo = ({users, onHandleClick, onAdd, onChecked, onCheckValue, onTodos, onDisplay}) => {


    const takeInput = (input, item) => {
        onAdd(input, item);
      }

    const handleItemClick = (idToMatch) => {
        onChecked(idToMatch);
    }

    

 return (
    <div className="todo-container">
    <InputTodo onHandler={takeInput} users={users}/>
    <RenderedTodo todos={onTodos} users={users} onHandleClick={onHandleClick} onItemClick={handleItemClick} onCheckValue={onCheckValue} onDisplay={onDisplay}/>
  </div>
 )
}

export default Todo