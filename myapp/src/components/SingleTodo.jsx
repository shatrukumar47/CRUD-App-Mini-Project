import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { failureAction, requestAction, singleTodoAction, successAction } from '../redux/action';
import axios from 'axios';

const SingleTodo = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const loading = useSelector((store)=> store.loading)
    const error = useSelector((store)=> store.error)  
    const [item, setItem] = useState({});


    function fetchData(){
        dispatch(requestAction());
          axios.get(`http://localhost:8080/todos/${params.id}`).then((res)=>{
              dispatch(singleTodoAction());
              setItem(res.data)
          }).catch((error)=>{
            dispatch(failureAction())
              console.log(error)
          })
      }
  
      useEffect(()=>{
          fetchData();
      },[])

      const navigate = useNavigate();
      const handleEdit = ()=>{
        navigate(`/todo/${params.id}/edit`)
      }

      if(loading){
        return <h1 style={{color:"white"}}>Loading....</h1>
      }
      if(error){
        return <h1 style={{color:"white"}}>Error Occurred....</h1>
      }
  
      return (
        <div
          style={{
            width: "500px",
            margin: "10px auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            background: "#ffc107",
            padding: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p style={item?.completed ? { color: "green" } : { color: "red" }}>
              {item?.completed ? "✅" : "⏳"}
            </p>
              <h3>
                {item?.id}. {item?.title}
              </h3>
          </div>
          <button
          style={{
            padding: "5px",
            background: "#ffc107",
            color: "red",
            border: "1px solid red",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={handleEdit}
        >
          Edit
        </button>
          
        </div>
      );
}

export default SingleTodo
