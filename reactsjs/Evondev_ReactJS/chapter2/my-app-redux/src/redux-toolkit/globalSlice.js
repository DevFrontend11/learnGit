import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const globalSlice = createSlice({
  name: "globalMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => ({
      ...state,
      darkMode: action.payload,
    }),
  },
});

export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
