import { SINGLE_TODO_SUCCESS, TODO_DELETE, TODO_FAILURE, TODO_GET_SUCCESS, TODO_POST_SUCCESS, TODO_REQUEST } from "./actionTypes";


const initialState = {
    todo:[],
    loading: false,
    error: false
}

export const reducer = (state = initialState, {type,payload})=>{
    switch(type){
        case TODO_REQUEST:{
            return {...state, loading: true}
        }
        case TODO_GET_SUCCESS:{
            return {...state, loading: false, todo:payload}
        }
        case TODO_FAILURE:{
            return {...state, loading: false, todo:[], error:true}
        }
        case TODO_POST_SUCCESS:{
            return {...state, loading: false, todo:[...state.todo , payload], error:false}
        }
        case TODO_DELETE:{
            return {...state, loading: false, todo:state.todo, error:false}
        }
        case SINGLE_TODO_SUCCESS:{
            return {...state, loading: false, error:false}
        }
        default:{
            return state;
        }
    }
}