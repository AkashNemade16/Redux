import React from 'react'
import { Checkbox } from '@material-ui/core';
import './todoItem.css';

const TodoItem = ({name, done, id}) => {
    const handleCheck = () =>{

    }
    return (
        <div className='todoItem'>
            <checkbox
                checked = {done}
                color = "primary"
                onChange={handleCheck}
                inputProps = {{'aria-label':'secondary checkbox'}}
            />
            
        </div>
    )
}

export default TodoItem