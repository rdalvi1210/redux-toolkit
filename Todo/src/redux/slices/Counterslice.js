import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const Counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
  },
});

export const { increment } = Counterslice.actions;
export default Counterslice.reducer;
