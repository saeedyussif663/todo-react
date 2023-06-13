
import RenderedTodo from "./RenderedTodo"
import InputTodo from "./InputTodo"
import './Todo.css'
import { useState } from "react"

const Todo = ({users, onHandleClick, onAdd, onChecked, onCheckValue}) => {


    const takeInput = (input, item) => {
        onAdd(input, item);
      }

    const handleItemClick = (checked) => {
        onChecked(checked);
    }

    

 return (
    <div className="todo-container">
    <InputTodo onHandler={takeInput} users={users}/>
    <RenderedTodo users={users} onHandleClick={onHandleClick} onItemClick={handleItemClick} onCheckValue={onCheckValue}/>
  </div>
 )
}

export default Todo