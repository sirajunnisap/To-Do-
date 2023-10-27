import React ,{useState} from 'react';
import './App.css';
import InputFeild  from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model';



const App: React.FC = ()=>{

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  const handleAdd = (e: React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now() , todo , isDone:false }])
      setTodo("");
    }
  }
  
  return (
    <div className='App'>
     <span className='heading'>Do-It-Now</span>
     <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
   );
}
  


export default App;


//to has many properties
//inside text
//uniq id
//isDone variable -completed or not


//second state for contain to list 

//id:Data.now() this is going to generate a random id for this .

//so set to do is going to be empty-- setTodo("")