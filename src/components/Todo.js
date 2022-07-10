import React from "react";
import { changeTocomplete, removeTodo } from "../features/todoList/todosSlice";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const removeHandle = (e, id) => {
    e.stopPropagation();
    dispatch(removeTodo(id));
  };
  const { title, description, time, id, completed } = todo;
  return (
    <article
      onClick={() => dispatch(changeTocomplete(id))}
      className={
        completed
          ? "todo__item todo--completed todo--toggle-completed"
          : "todo__item todo--toggle-completed"
      }
    >
      <h3 className="todo__title">{title}</h3>
      <p className="todo__text">{description}</p>
      <p className="todo__time">{new Date(time).toLocaleString()}</p>
      {completed ? (
        <button
          onClick={(e) => removeHandle(e, id)}
          className="todo__button--remove"
        >
          Remove
        </button>
      ) : (
        ""
      )}
    </article>
  );
};

export default Todo;
