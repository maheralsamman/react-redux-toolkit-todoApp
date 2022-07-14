import { createSlice } from "@reduxjs/toolkit";

const localStorageSet = (state) =>
  window.localStorage.setItem("todos", JSON.stringify(state));

const initialState = JSON.parse(window.localStorage.getItem("todos")) || [];

const todosSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
      localStorageSet(state);
    },
    changeTocomplete: (state, { payload }) => {
      const updatedArr = state;
      updatedArr.forEach((todo) => {
        const completeTodo = todo;
        if (completeTodo.id === payload) {
          completeTodo.completed = !completeTodo.completed;
          updatedArr.splice(updatedArr.indexOf(completeTodo), 1, completeTodo);
        }
        localStorageSet(updatedArr);
        return updatedArr;
      });
    },
/*

 Drop the updatedArr variable and just run a .map method on the state instead in your reducer. 
 
*/
    removeTodo: (state, { payload }) => {
      const updatedArr = state.filter((todo) => todo.id !== payload);
      localStorageSet(updatedArr);
      return updatedArr;
    },
  },
});

export const { addTodo, changeTocomplete, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
