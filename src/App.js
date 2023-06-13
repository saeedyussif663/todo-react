
import { useEffect, useState} from 'react'

import Interface from './components/Interface';
import RenderedUsers from './components/RenderedUsers';
import InputModal from './UI/InputModal';
import ConfirmationModal from './UI/ConfirmationModal';
import Todo from './components/Todo';


function App() {

  const [users, setUsers] = useState([]);
  const [item, setItem] = useState('');
  const [inputModalIsClosed, setInputModalIsClosed] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [individualTodo, setIndividualTodo] = useState(false);
  const [itemToBeDisplalyed, setItemToBeDisplayed] = useState('');
  const [checkedState, setCheckedState] = useState(false)
  


 const takeUserData = (data) => {
  setInputModalIsClosed(false);
  setUsers((prevState) => {
    return [...prevState, {
      id: Math.random(),
      name: data,
      todos: [],
    }]
  })
  
 };

  const toggleInputModal = () => {
    setInputModalIsClosed((prevState) => !prevState);
  };

const deleteModal = () => {
  const updatedArray = users.filter((user) => user.id !== item.id)
  setUsers(updatedArray);
  setShowConfirmationModal((prevState) => !prevState);
  setIndividualTodo(false)
}

  const showConfirmaitonModalHandler = (user) => {
    setItemToBeDisplayed(user)
    setShowConfirmationModal((prevState) => !prevState);
    setItem(user)
  }

  const showIndividualTodo = () => {
    setIndividualTodo(true);
    setShowConfirmationModal((prevState) => !prevState);
  }

  const addTodo = (input) => {
    const updateUsersArray = users.map((user) => {
      if (user.id === item.id) {
       user.todos.push({id: Math.random(), task: input, selected: false});
        return  user;
        
      }
      return user;
    })
    setUsers(updateUsersArray);
  }

  const handleItemClick = (id) => {
    const updatedData = users.map(item => {
      if (item.todos.some(todo => todo.id === id)) {
        return {
          ...item,
          todos: item.todos.map(todo => {
            if (todo.id === id) {
              setCheckedState(!todo.selected)
              return { ...todo, selected: !todo.selected }
            }
            return todo;
          })
        };
      }
      return item;
    });
    setUsers(updatedData);
    console.log(users);
  }

  


  return (
    <div>
      {inputModalIsClosed &&<InputModal toggleModal={toggleInputModal} users={users} takeUserData={takeUserData}/>}
      {showConfirmationModal && <ConfirmationModal onDelete={deleteModal} onShowModal={showConfirmaitonModalHandler} onShowTodo={showIndividualTodo} item={item}/>}
      <div className='container'>
      <Interface toggleModal={toggleInputModal}/>
      <RenderedUsers users={users} onDelete={showConfirmaitonModalHandler}/>
      </div>
      {individualTodo && <Todo users={item} onHandleClick={handleItemClick} onAdd={addTodo} onChecked={handleItemClick} onCheckValue={checkedState}/>}
    </div>
  );
}

export default App;
