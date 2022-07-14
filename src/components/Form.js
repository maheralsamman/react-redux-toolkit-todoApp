import React, { useState, useRef } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoList/todosSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleInputElement = useRef();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setTitle((prev) => (name === "title" ? value : prev));
    setDescription((prev) => (name === "description" ? value : prev));
    titleInputElement.current.className = "form__titleInput";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      titleInputElement.current.className = "form__titleInput--danger";
      return null;
    }
    const id = Math.floor(Math.random() * 10000);
    const time = Date.now();
    const completed = false;
    const newTodo = { title, description, id, time, completed };
    dispatch(addTodo(newTodo));

    setTitle("");
    setDescription("");
  };

  return (
    <section className="section">
      <h1 className="section__title">Register New ToDo</h1>
      <form className="form" onSubmit={handleSubmit} action="">
        <label className="form__titleLabel" htmlFor="title">
          Title
        </label>
        <input
          id="txtTodoItemToAdd"
          ref={titleInputElement}
          name="title"
          type="text"
          className="form__titleInput"
          value={title}
          onChange={handleChange}
          autoFocus
        />
        <label className="form__descriptionLabel" htmlFor="description">
          Description
        </label>
        <input
          className="form__descriptionInput"
          name="description"
          type="text"
          value={description}
          onChange={handleChange}
        />
        <button id="btnAddTodo" className="form__submit" onClick={handleSubmit}>
          Add a todo
        </button>
      </form>
    </section>
  );
};

export default Form;
