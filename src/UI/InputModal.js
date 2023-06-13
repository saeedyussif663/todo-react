

import { useState } from 'react';
import './Modal.css'

const InputModal = ({toggleModal,  takeUserData}) => {
    const [input, setInput] = useState('')


    const inputHandler = event => {
       const  enteredName = event.target.value;
        setInput(enteredName)
    };

    const addUserHandler = event=> {
        event.preventDefault();
        if (input.length=== 0) {
            return;
        }
        takeUserData(input);
        setInput('');
    }
    

    return (
        <>
        <div className='backdrop' onClick={toggleModal}></div>
        <div className="modal">
            <h1>Add User</h1>
            <input 
                type='text' 
                placeholder='Enter Username' 
                value={input}
                onChange={inputHandler}/>
            <div className='buttons'>
            <button onClick={toggleModal} type='button'>Close</button>
            <button onClick={addUserHandler}>Add User</button>
            </div>
            </div> 
        </>
    )
}

export default InputModal;