import { createSlice } from "@reduxjs/toolkit";
const items = JSON.parse(localStorage.getItem("showSidebar2"));
const initialState = {
  darkMode: false,
  showSidebar: items,
};

const globalSlice = createSlice({
  name: "globalMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => ({
      ...state,
      darkMode: action.payload,
    }),
    toggleSidebar: (state, action) => ({
      ...state,
      showSidebar: action.payload,
    }),
  },
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;
