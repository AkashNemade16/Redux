import React,{useState} from 'react'
import './input.css';   
const Input = () => {
    const [input,setInput] = useState('');
    const addTodo = () =>{

    }
    return (
        <div className="input">
            <input type="text" onChange={e => setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}
export default Input;