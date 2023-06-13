
import { useState } from 'react';
import './InputTodo.css'

const InputTodo = (props) => {
    const [input, setInput] = useState('')

    const inputHandler = (event) => {
        setInput(event.target.value);
        
    }

    const  submitInput = (event) => {
        event.preventDefault()
        if(input.length < 1) {
            return
        }
        props.onHandler(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={submitInput}>
                <label className='label' htmlFor='todo'>{`${props.users.name}'s Todo`}</label>
                <input type="text" placeholder="Enter your Todo" id="todo" value={input} className='input' onChange={inputHandler}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
};

export default InputTodo;