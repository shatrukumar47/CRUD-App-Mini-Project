import axios from "axios"
import { PRODUCT_DELETE_SUCCESS, PRODUCT_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_PATCH_SUCCESS, PRODUCT_POST_SUCCESS, PRODUCT_REQUEST } from "../actionTypes"


export const postProduct = (newProduct)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios.post(`http://localhost:8080/products`,newProduct).then((res)=>{
        dispatch({type:PRODUCT_POST_SUCCESS});
    }).catch((error)=>{
        dispatch({type:PRODUCT_FAILURE, payload: error.message})
    })
}

export const getProduct = (paramsObj={})=> (dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios.get(`http://localhost:8080/products`,paramsObj).then((res)=>{
        console.log("data: ", res.data)
        console.log("res:" , res.headers); // Log response headers
        console.log( "x-count: ",res.headers.get("X-Total-Count")); // Log response headers
        dispatch({type:PRODUCT_GET_SUCCESS, payload:{data: res.data, count: res.headers.get("X-Total-Count") || res.data.length}})
    }).catch((error)=>{
        dispatch({type:PRODUCT_FAILURE, payload: error.message})
    })
}

export const updateProduct = (id,data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios.patch(`http://localhost:8080/products/${id}`,data).then((res)=>{
    dispatch({type:PRODUCT_PATCH_SUCCESS})
    }).catch((error)=>{
        dispatch({type:PRODUCT_FAILURE, payload: error.message})
    })
}

export const deleteProduct = (id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    return axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
        console.log("i am inside then() in delete func")
    dispatch({type:PRODUCT_DELETE_SUCCESS})
    }).catch((error)=>{
        dispatch({type:PRODUCT_FAILURE, payload: error.message})
    })
}