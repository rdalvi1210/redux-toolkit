import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/Counterslice";
import TodoReducer from "../slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    counter: CounterReducer,
  },
});
