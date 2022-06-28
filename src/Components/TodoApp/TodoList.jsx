import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from '../../Redux/action';


export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store)=>store.todos)
  const isload = useSelector((store)=>store.isload)
  const iserr = useSelector((store)=>store.isError)
  


  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  if(isload){
    return <p>Loading....</p>
  }
  if(iserr){
    return <p>Error....!</p>
  }
  
  return (
    <>
    {todos.map((item)=>{return(
        <p key={item.id}>{item.title}</p>
        )})}
    </>
  )
}
