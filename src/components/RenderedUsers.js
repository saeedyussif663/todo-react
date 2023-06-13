
import Card from '../UI/Card';
import './RenderedUsers.css'


const RenderedUsers = ({users,  onDelete}) => {

    const deleteHandler = (user) => {
        onDelete(user);
    }

    return (
        <main>
           {users.map((user) => {
            return <h2 key={user.id} onClick={() => deleteHandler(user)}>{`${user.name}'s Todo`}</h2>
           })}
        </main>
    )
};

export default RenderedUsers