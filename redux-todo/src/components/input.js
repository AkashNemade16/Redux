import React,{useState} from 'react'
import './input.css'; 
import {useDispatch} from 'react-redux';
import {saveTodo} from '../features/todoslice'

const Input = () => {
    const [input,setInput] = useState('');
    const dispatch = useDispatch()//to contact with redux
    const addTodo = () =>{
        console.log(`Adding${input}`)
        dispatch(saveTodo({
            items:input,
            done:false,
            id:Date.now()
        }))
    }
    return (
        <div className="input">
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}
export default Input;
