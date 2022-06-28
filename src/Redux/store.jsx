import {createStore, applyMiddleware} from 'redux'
import { reducer } from './reducer'


const customMedialware= ({dispatch})=>(next)=>(action)=>{
    
    if(typeof action=='function'){
       return action(dispatch)
    }
    return next(action)

}
 const store = createStore(reducer,applyMiddleware(customMedialware))

 export default store