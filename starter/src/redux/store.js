import { configureStore } from "@reduxjs/toolkit";

// reducers
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});