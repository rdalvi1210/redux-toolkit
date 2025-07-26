import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 0, text: "Hello world" }] };

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: 1,
        text: action.payload,
      };
      state.todos.push(todo);
    },
  },
});

export const { addTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
