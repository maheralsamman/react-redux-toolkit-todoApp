import React from "react";
import Todo from "./Todo";
import "../App.css";
import { useSelector } from "react-redux";

const Todos = () => {
  const todolist = useSelector((state) =>
    state.todolist ? state.todolist : []
  );

  return (
    <main id="todoList" className="main">
      {todolist.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </main>
  );
};

export default Todos;
