import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  failureAction,
  postSuccessAction,
  requestAction,
} from "../redux/action";
import axios from "axios";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const error = useSelector((store) => store.error);

  console.log(text)
  function postTodo() {
    const todoItem = {
      title: text,
      completed: false,
    };
    dispatch(requestAction());
    axios
      .post(`http://localhost:8080/todos`, todoItem)
      .then((res) => {
        dispatch(postSuccessAction(res.data));
        console.log(res.data);
      })
      .catch((erro) => {
        dispatch(failureAction());
        console.log(erro);
      });
  }
  const handleClick = () => {
    if (text !== "") {
      postTodo();
    } else {
      alert("Please fill the input ⚠");
    }
  };

  if(loading){
    return <h1 style={{color:"white"}}>Loading....</h1>
  }
  if(error){
    return <h1 style={{color:"white"}}>Error Occurred....</h1>
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "20px",
          background: "pink",
          color: "white",
          border: "none",
          marginBottom:"30px"
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px",
          fontSize: "20px",
          background: "teal",
          color: "white",
          border: "none",
          cursor:"pointer",
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
