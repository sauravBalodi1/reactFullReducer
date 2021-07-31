import React from 'react'
import {useSelector,shallowEqual} from "react-redux";
import TodoListItem from './TodoListItem';

const selecttodoids=(state)=>state.todos.map((todo)=>todo.id)
const Todolist = () => {
const todoids=useSelector(selecttodoids,shallowEqual)
  const rendereditems=todoids.map((todoid)=>{
     return <TodoListItem key={todoid} id={todoid}/>
  })

    return  <ul>{rendereditems}</ul>            
        
    
}

export default Todolist
