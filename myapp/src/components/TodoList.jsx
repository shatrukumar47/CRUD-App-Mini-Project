import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoList = ({ item, handleDelete, handleToggle }) => {
  const { id, title, completed } = item;

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
        <p style={completed ? { color: "green" } : { color: "red" }}>
          {completed ? "✅" : "⏳"}
        </p>
        <Link to={`/todo/${id}`} style={{textDecoration:"none", color:"black"}}>
          <h3>
            {id}. {title}
          </h3>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          style={{
            padding: "5px",
            cursor: "pointer",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "20px",
          }}
          onClick={() => handleToggle(id, completed)}
        >
          ✅-⌛
        </button>
        <button
          style={{
            padding: "5px",
            background: "#ffc107",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "25px",
          }}
          onClick={() => handleDelete(id)}
        >
          🚮
        </button>
      </div>
    </div>
  );
};

export default TodoList;
