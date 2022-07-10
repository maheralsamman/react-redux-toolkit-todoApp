import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./features/todoList/todosSlice";

export const store = configureStore({
    reducer: {
        todolist: todosReducer,
    },
})
