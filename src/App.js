
import { useEffect, useState} from 'react'

import Interface from './components/Interface';
import RenderedUsers from './components/RenderedUsers';
import InputModal from './UI/InputModal';
import ConfirmationModal from './UI/ConfirmationModal';
import Todo from './components/Todo';


function App() {

  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
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
  setTodos((prevState) => {
    return [...prevState, {id: Math.random(), task: input, selected: false, name: item.name}]
  })
  }
    

  const handleItemClick = (idToMatch) => {
    const updatedTodo = todos.map(obj => {
      if (obj.id === idToMatch) {
          return {...obj, selected: !obj.selected}
      }
      return obj
    })
    setTodos(updatedTodo)
  }

  const storeTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const storeUsersToLocalStorage = (todos) => {
    localStorage.setItem("users", JSON.stringify(users));
  }



useEffect(() => {
  const todos = localStorage.getItem("todos");
  const users = localStorage.getItem("users");
  if (todos) {
    setTodos(JSON.parse(todos));
  };
  if (users) {
    setUsers(JSON.parse(users))
  }
}, [])

  useEffect(() => {
    storeTodosToLocalStorage(todos);
    storeUsersToLocalStorage(users)
  }, [todos, users])
  


  return (
    <div>
      {inputModalIsClosed &&<InputModal toggleModal={toggleInputModal} users={users} takeUserData={takeUserData}/>}
      {showConfirmationModal && <ConfirmationModal onDelete={deleteModal} onShowTodo={showIndividualTodo} item={item}/>}
      <div className='container'>
      <Interface toggleModal={toggleInputModal}/>
      <RenderedUsers users={users} onDelete={showConfirmaitonModalHandler}/>
      </div>
      {individualTodo && <Todo users={item} onHandleClick={handleItemClick} onAdd={addTodo} onChecked={handleItemClick} onCheckValue={checkedState} onTodos={todos} onDisplay={itemToBeDisplalyed}/>}
    </div>
  );
}

export default App;
