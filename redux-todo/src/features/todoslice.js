import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todolist:[]
}

const todoslice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        savetodo:(state,action)=>{//setTodoList
            state.todolist.push(action.payload);
        }
    }
});

export const {savetodo} = todoslice.actions
export default todoslice.reducer