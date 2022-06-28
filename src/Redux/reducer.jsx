import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

const initalState={
todos:[],
isload:false,
isError:false,
}

export const reducer =(state=initalState,{type,payload})=>{
    switch (type) {
        case GET_TODO_REQUEST:{
            return{
                ...state,
                isload:true,
            }
        }
         
        case GET_TODO_SUCCESS:{
            return{
                ...state,
                isload:false,
                todos:payload
            }
        }

        case GET_TODO_FAILURE:{
            return{
                ...state,
                isload:false,
                isError:true
            }
        }

        //
        case ADD_TODO_REQUEST:{
            return{
                ...state,
                isload:true
            }
        }

        case ADD_TODO_SUCCESS:{
            return{
                ...state,
                isload:false
            }
        }

        case ADD_TODO_FAILURE:{
            return{
                ...state,
                isload:false,
                isError:true
            }
        }

    
        default:
            return state
    }
}