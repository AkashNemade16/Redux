import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoslice'

export default configureStore({//for redux to keep track of what is going on 
  reducer: {  
    todos:todoReducer
  },
});
