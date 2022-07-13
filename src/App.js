import React from "react";
import "./reset.css";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="app">
      <h1 className="app__title">My React Todo App</h1>
      <Form />
      <Todos />
    </div>
  );
}
export default App;
