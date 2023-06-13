import Card from "../UI/Card"
import './Interface.css';

const Interface = ({toggleModal}) =>{

    return (
         <section className="interface">
            <h1  onClick={toggleModal}>Create Todo</h1>
        </section>
    
    )

}

export default Interface;