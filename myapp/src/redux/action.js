import { SINGLE_TODO_SUCCESS, TODO_DELETE, TODO_FAILURE, TODO_GET_SUCCESS, TODO_POST_SUCCESS, TODO_REQUEST } from "./actionTypes"



export const requestAction = ()=>{
    return {type:TODO_REQUEST}
}

export const failureAction = ()=>{
    return {type:TODO_FAILURE}
}

export const successAction = (payload)=>{
    return {type:TODO_GET_SUCCESS, payload}
}

export const postSuccessAction = (payload)=>{
    return {type:TODO_POST_SUCCESS, payload}
}

export const deleteAction = ()=>{
    return {type:TODO_DELETE}
}

export const singleTodoAction = ()=>{
    return {type:SINGLE_TODO_SUCCESS}
}