import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, failureAction, requestAction, successAction } from "../redux/action";

const Todo = () => {

  const dispatch = useDispatch();
  const todo = useSelector((store)=> store.todo)
  const loading = useSelector((store)=> store.loading)
  const error = useSelector((store)=> store.error)
  

    function fetchData(){
      dispatch(requestAction());
        axios.get(`http://localhost:8080/todos`).then((res)=>{
            dispatch(successAction(res.data))
        }).catch((error)=>{
          dispatch(failureAction())
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    const handleDelete = (id)=>{
      axios({
        method:"delete",
        url : `http://localhost:8080/todos/${id}`
      }).then((res)=>{
        fetchData();
      })
    }

    const handleToggle = (id, completed)=>{
      axios({
        method:"patch",
        url: `http://localhost:8080/todos/${id}`,
        data: {
          "completed": !completed
        }
      }).then((res)=>{
        fetchData();
        console.log(res)
      }).catch((error)=>{
        console.log(error)
      })
    }
  

    if(loading){
      return <h1 style={{color:"white"}}>Loading....</h1>
    }
    if(error){
      return <h1 style={{color:"white"}}>Error Occurred....</h1>
    }

    console.log(todo)

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      {
        todo?.map((item)=>{
          return <TodoList key={item.id} item={item} handleDelete={handleDelete} handleToggle={handleToggle} />
        })
      }
    </div>
  );
};

export default Todo;
