import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  globalMode: globalSlice,
});

const store = configureStore({
  reducer,
});
export default store;
