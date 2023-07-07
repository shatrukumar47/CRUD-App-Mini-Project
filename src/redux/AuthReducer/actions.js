import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes"


export const loginRequest = (user)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    return axios.post(`https://reqres.in/api/login`, user).then((res)=>{
        dispatch({type:LOGIN_SUCCESS, payload: res.data.token})
    }).catch((error)=>{
        dispatch({type:LOGIN_FAILURE})
    })
}

export const logoutAction = (dispatch)=>{
    dispatch({type:LOGOUT_SUCCESS})
}