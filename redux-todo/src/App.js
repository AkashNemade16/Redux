import React from 'react';
import './App.css';
import Input from './components/input';
import TodoItem from './components/todoItem';

const todolist = [{
  item:'todo',
  done:false,
  id:546757
},{
  item: 'todo2',
  done: false,
  id: 57428
}]

function App() {
  return (
    <div className="app">
      <div className="AppContainer">
          <div className="app_todoContainer">
              {
                  todolist.map(item => (
                    <TodoItem
                    name = {item.item}
                    done = {item.done}
                    id = {item.id}/>
                  ))     
              }
          </div>  
      </div>
      <Input/>
    </div>
  );
}

export default App;
