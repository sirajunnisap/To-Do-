import React from 'react'
import { Todo } from '../model';
import "./style.css"
import SingleTodo from './SingleTodo';

interface Props {
    todos : Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
    <>
    {

   todos.length >0 ?(
    <div className='todos'>
    {todos.map(todo => (
      <SingleTodo 
      todo={todo} 
      key={todo.id} 
      todos = {todos}
      setTodos={setTodos} />
    ))}
  </div>
   ):(
    <div className='empty-message'>
    <p>No todos found. Add a new todo to get started!</p>
  </div>
   )
   
     }
    </>
  )
}

export default TodoList
