import React, {useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function TodoForm() {
   const [todoText,setTodoText] = useState("");
   const dispatch = useDispatch();  //accessing the redux store to update state.
//    adding todo text
   function add(e){
    e.preventDefault();
    const trimedTodoText = todoText.trim();
    if(!trimedTodoText) return;
    dispatch(addTodo({text:trimedTodoText,completed:false,priority:"low"}));
    setTodoText("");
   }

  return (
      <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todoText}
              onChange={(e)=>(
                setTodoText(e.target.value))}
              
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;