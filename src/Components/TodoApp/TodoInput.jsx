import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ATF, ATR, ATS, getTodos } from "../../Redux/action";
import axios from 'axios'
export const TodoInput = () => {

  const [todo, settodo] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(ATR());
    axios
      .post("http://localhost:8080/todos/", { title: todo,status:false })
      .then((res) => {dispatch(ATS())
        dispatch(getTodos())
    })
      .catch((e) => dispatch(ATF()));
  };

  const handleOnChange = (e) => {
    settodo(e.target.value);
  };
  return (
    <div>
      <h3>Todos</h3>
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
