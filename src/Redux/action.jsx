import axios from "axios";
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from "./actionType";

export const GTR = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

export const GTS = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};

export const GTF = () => {
  return {
    type: GET_TODO_FAILURE,
  };
};

export const getTodos =  () =>(dispatch)=> {
  dispatch(GTR());
  axios
    .get("http://localhost:8080/todos")
    .then((res) => dispatch(GTS(res.data)))
    .catch((e) => dispatch(GTF()));
};

//ADD TODOS
export const ATR = () => {
  return {
    type: ADD_TODO_REQUEST,
  };
};

export const ATS = (payload) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload,
  };
};

export const ATF = () => {
  return {
    type: ADD_TODO_FAILURE,
  };
};

//UPDATE
export const UTE = () => {
  return {
    type: UPDATE_TODO_REQUEST,
  };
};

export const UTS = (payload) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload,
  };
};

export const UTF = () => {
  return {
    type: UPDATE_TODO_FAILURE,
  };
};
