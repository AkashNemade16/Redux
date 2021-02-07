import React from 'react';
import './App.css';
import Input from './components/input';
import TodoItem from './components/todoItem';
import {useSelector} from 'react-redux';
import {selectTodoList} from './features/todoslice';



function App() {
  const todolist = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
          <div className="app__todoContainer">
              {
                  todolist.map(item => (
                    <TodoItem
                    name = {item.item}
                    done = {item.done}
                    id = {item.id}/>
                  ))     
              }
          </div>  
        <Input />
      </div>
      
    </div>
  );
}

export default App;
