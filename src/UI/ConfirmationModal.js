

import { useState } from 'react';
import './ConfirmationModal.css'

const ConfirmationModal = ({onDelete, onShowTodo}) => {
  
    const deleteHandler = () => {
        onDelete();
    }

    return (
        <>
        <div className='backdrop'></div>
        <div className="modal">
            <div className='buttons'>
            <button onClick={onShowTodo}>View</button>
            <button onClick={deleteHandler}>Delete</button>
            </div>
            </div> 
        </>
    )
}

export default ConfirmationModal