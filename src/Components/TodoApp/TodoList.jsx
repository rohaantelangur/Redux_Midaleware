import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from '../../Redux/action';


export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store)=>store.todos)
  console.log(todos);
  
  
  
  useEffect(() => {
    dispatch(getTodos())
  }, [])
  return (
    <>
    {todos.map((item)=>{return(
        <p key={item.id}>{item.title}</p>
        )})}
    </>
  )
}
