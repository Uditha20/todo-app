import React,{useState} from 'react'
import {BsFillFileExcelFill} from 'react-icons/bs'
// import {AiFillEdit} from 'react-icons/Ai'


// import "./todo.css"



function TodoForm() {
  const [input,setInput]=useState("");
  const [todo,setTodo]=useState([]);

  const handelSubmit=(e)=>{
    e.preventDefault();
    const newtodo={
      id:new Date().getTime(),
      text:input,
      completed:false
    }

    setTodo([...todo].concat(newtodo));
    setInput("");
  }
  const handelInput=(e)=>{
    setInput(e.target.value);
  }

  const edit=({id,text})=>{
    const removeArr=[...todo].filter(t=>t.id !==id);
    console.log(removeArr);
    setTodo(removeArr);
  }



  return (
    <div>
        <form className='todo-form' onSubmit={handelSubmit}>
        <input type="text" name="text" value={input} placeholder='Add to do' className='todo-input' onChange={handelInput}/>
        <button className='todo-button'>Add todo</button>

        </form>
        {todo.map((todos)=>{
          return <div key={todos.id} className='todo-text'>{todos.text}
         
          <BsFillFileExcelFill size='1.5rem' onClick={()=>edit({id:todos.id,text:todos.text})}/>
          
          
          </div>

        })}
    </div>
  )
}

export default TodoForm