import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 0, text: "Hello world" }],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(), // ✅ avoid hardcoded id
        text: action.payload,
      };
      state.todos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// ✅ Export both actions
export const { addTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
